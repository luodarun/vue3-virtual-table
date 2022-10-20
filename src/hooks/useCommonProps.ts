import { computed, ref, unref } from 'vue';
import { buildProp } from '@/utils';
import { componentSizes } from '@/constants';
import { useProp } from './useProp';
import { useGlobalConfig } from './useGlobalConfig';
import type { ComponentSize } from '@/constants';
import type { MaybeRef } from '@vueuse/core';

export const useSizeProp = buildProp({
    type: String,
    values: componentSizes,
    required: false,
} as const);

export const useSize = (
    fallback?: MaybeRef<ComponentSize | undefined>,
    ignore: Partial<
        Record<'prop' | 'form' | 'formItem' | 'global', boolean>
    > = {}
) => {
    const emptyRef = ref(undefined);

    const size = ignore.prop ? emptyRef : useProp<ComponentSize>('size');
    const globalConfig = ignore.global ? emptyRef : useGlobalConfig('size');

    return computed(
        (): ComponentSize =>
            size.value || unref(fallback) || globalConfig.value || ''
    );
};

export const useDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
    const disabled = useProp<boolean>('disabled');
    return computed(() => disabled.value || unref(fallback) || false);
};
