import { computed, unref } from 'vue';
import { useGlobalConfig } from './useGlobalConfig';

export const defaultNamespace = 'vr';
const statePrefix = 'is-';

// establish bem rule
const _bem = (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string
) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix) {
        cls += `-${blockSuffix}`;
    }
    if (element) {
        cls += `__${element}`;
    }
    if (modifier) {
        cls += `--${modifier}`;
    }
    return cls;
};

export const useNamespace = (block: string) => {
    // namespace被开放为了一个配置项
    const globalConfig = useGlobalConfig('namespace');
    const namespace = computed(() => globalConfig.value || defaultNamespace);
    const b = (blockSuffix = '') =>
        _bem(unref(namespace), block, blockSuffix, '', '');
    const e = (element?: string) =>
        element ? _bem(unref(namespace), block, '', element, '') : '';
    const m = (modifier?: string) =>
        modifier ? _bem(unref(namespace), block, '', '', modifier) : '';
    const be = (blockSuffix?: string, element?: string) =>
        blockSuffix && element
            ? _bem(unref(namespace), block, blockSuffix, element, '')
            : '';
    const em = (element?: string, modifier?: string) =>
        element && modifier
            ? _bem(unref(namespace), block, '', element, modifier)
            : '';
    const bm = (blockSuffix?: string, modifier?: string) =>
        blockSuffix && modifier
            ? _bem(unref(namespace), block, blockSuffix, '', modifier)
            : '';
    const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
        blockSuffix && element && modifier
            ? _bem(unref(namespace), block, blockSuffix, element, modifier)
            : '';
    const is = (name: string, ...args: [boolean | undefined] | []) => {
        const state = args.length >= 1 ? args[0]! : true;
        return name && state ? `${statePrefix}${name}` : '';
    };
    return {
        namespace,
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is,
    };
};

export type UseNamespaceReturn = ReturnType<typeof useNamespace>;
