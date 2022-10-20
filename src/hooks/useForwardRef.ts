import { provide } from 'vue';

import type { InjectionKey, ObjectDirective, Ref } from 'vue';

type ForwardRefSetter = <T>(el: T) => void;

// const forwardRefSetter: ForwardRefSetter = (el) => {
//     console.log(el);
// }
// forwardRefSetter<number>('111') error

export type ForwardRefInjectionContext = {
    setForwardRef: ForwardRefSetter;
};

export const FORWARD_REF_INJECTION_KEY: InjectionKey<ForwardRefInjectionContext> =
    Symbol('elForwardRef');

export const useForwardRef = <T>(forwardRef: Ref<T | null>) => {
    const setForwardRef = (el: T) => {
        forwardRef.value = el;
    };

    provide(FORWARD_REF_INJECTION_KEY, {
        setForwardRef,
    });
};

// 其实就是设置forwardRef变量的值，但是又没有用到这个值
export const useForwardRefDirective = (
    setForwardRef: ForwardRefSetter
): ObjectDirective => {
    return {
        mounted(el) {
            setForwardRef(el);
        },
        updated(el) {
            setForwardRef(el);
        },
        unmounted() {
            setForwardRef(null);
        },
    };
};
