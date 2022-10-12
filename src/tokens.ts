import type { ExtractPropTypes, InjectionKey, Ref, ComputedRef } from 'vue';
import { configProviderProps } from './config';
import type { Instance } from '@popperjs/core';

export type Measurable = {
    getBoundingClientRect: () => DOMRect;
};

export type ConfigProviderContext = Partial<
    ExtractPropTypes<typeof configProviderProps>
>;

// 用于返回全局配置项
export const configProviderContextKey: InjectionKey<
    Ref<ConfigProviderContext>
> = Symbol('configProviderContextKey');
/**
 * triggerRef indicates the element that triggers popper
 * contentRef indicates the element of popper content
 * referenceRef indicates the element that popper content relative with
 */
export type ElPopperInjectionContext = {
    triggerRef: Ref<Measurable | undefined>;
    contentRef: Ref<HTMLElement | undefined>;
    popperInstanceRef: Ref<Instance | undefined>;
    referenceRef: Ref<Measurable | undefined>;
    role: ComputedRef<string>;
};
export type ElPopperContentInjectionContext = {
    arrowRef: Ref<HTMLElement | undefined>;
    arrowOffset: Ref<number | undefined>;
};
export const POPPER_INJECTION_KEY: InjectionKey<ElPopperInjectionContext> =
    Symbol('popper');

export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<ElPopperContentInjectionContext> =
    Symbol('popperContent');
