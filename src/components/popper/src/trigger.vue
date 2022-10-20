<template>
    <only-child
        v-if="!virtualTriggering"
        v-bind="$attrs"
        :aria-describedby="open ? id : undefined"
    >
        <slot />
    </only-child>
</template>

<script lang="ts" setup>
import { inject, onMounted, watch } from 'vue';
import { unrefElement } from '@vueuse/core';
import { OnlyChild } from '@/components/slot';
import { useForwardRef } from '@/hooks/useForwardRef';
import { POPPER_INJECTION_KEY } from '@/tokens';
import { isElement } from '@/utils/types';
import { popperTriggerProps } from './trigger';

defineOptions({
    name: 'VrPopperTrigger',
    inheritAttrs: false,
});

const props = defineProps(popperTriggerProps);

const { triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!;

// 给谁用？only-child里面有用到，用来触发
useForwardRef(triggerRef);

onMounted(() => {
    watch(
        () => props.virtualRef,
        virtualEl => {
            if (virtualEl) {
                triggerRef.value = unrefElement(virtualEl as HTMLElement);
            }
        },
        {
            immediate: true,
        }
    );

    watch(
        () => triggerRef.value,
        (el, prevEl) => {
            // 事件触发
            if (isElement(el)) {
                (
                    [
                        'onMouseenter',
                        'onMouseleave',
                        'onClick',
                        'onKeydown',
                        'onFocus',
                        'onBlur',
                        'onContextmenu',
                    ] as const
                ).forEach(eventName => {
                    const handler = props[eventName];
                    if (handler) {
                        (el as HTMLElement).addEventListener(
                            eventName.slice(2).toLowerCase(),
                            handler as any
                        );
                        (prevEl as HTMLElement)?.removeEventListener?.(
                            eventName.slice(2).toLowerCase(),
                            handler as any
                        );
                    }
                });
            }
        },
        {
            immediate: true,
        }
    );
});

defineExpose({
    /**
     * @description trigger element
     */
    triggerRef,
});
</script>
