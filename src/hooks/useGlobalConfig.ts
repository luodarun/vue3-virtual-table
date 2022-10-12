import { computed, getCurrentInstance, inject, provide, ref, unref } from 'vue';
import type { App, Ref } from 'vue';
import { configProviderContextKey } from '../tokens';
import { debugWarn } from '../utils/error';
import { keysOf } from '../utils/object';
import type { ConfigProviderContext } from '../tokens';
import type { MaybeRef } from '@vueuse/core';

const globalConfig = ref<ConfigProviderContext>();

export function useGlobalConfig<
    K extends keyof ConfigProviderContext,
    D extends ConfigProviderContext[K]
>(
    // eslint-disable-next-line no-unused-vars
    key: K,
    // eslint-disable-next-line no-unused-vars
    defaultValue?: D
): Ref<Exclude<ConfigProviderContext[K], undefined> | D>;
export function useGlobalConfig(): Ref<ConfigProviderContext>;
export function useGlobalConfig(
    key?: keyof ConfigProviderContext,
    defaultValue = undefined
) {
    // globalConfig就是默认值
    const config = getCurrentInstance()
        ? inject(configProviderContextKey, globalConfig)
        : globalConfig;
    if (key) {
        return computed(() => config.value?.[key] ?? defaultValue);
    } else {
        return config;
    }
}

export const provideGlobalConfig = (
    config: MaybeRef<ConfigProviderContext>,
    app?: App,
    global = false
) => {
    // 只有在setup语法中（也就是组合式）中这个getCurrentInstance才能获取到对象
    const inSetup = !!getCurrentInstance();
    const oldConfig = inSetup ? useGlobalConfig() : undefined;

    const provideFn = app?.provide ?? (inSetup ? provide : undefined);
    if (!provideFn) {
        debugWarn(
            'provideGlobalConfig',
            'provideGlobalConfig() can only be used inside setup().'
        );
        return;
    }

    const context = computed(() => {
        const cfg = unref(config);
        if (!oldConfig?.value) return cfg;
        return mergeConfig(oldConfig.value, cfg);
    });
    provideFn(configProviderContextKey, context);
    if (global || !globalConfig.value) {
        globalConfig.value = context.value;
    }
    return context;
};
// merge and remove repeat item
const mergeConfig = (
    a: ConfigProviderContext,
    b: ConfigProviderContext
): ConfigProviderContext => {
    const keys = [...new Set([...keysOf(a), ...keysOf(b)])];
    const obj: any = {};
    for (const key of keys) {
        obj[key] = b[key] ?? a[key];
    }
    return obj;
};
