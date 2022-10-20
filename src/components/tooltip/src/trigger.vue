<template>
    <vr-popper-trigger
        :id="id"
        :virtual-ref="virtualRef"
        :open="open"
        :virtual-triggering="virtualTriggering"
        :class="ns.e('trigger')"
        @blur="onBlur"
        @click="onClick"
        @contextmenu="onContextMenu"
        @focus="onFocus"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
        @keydown="onKeydown"
    >
        <slot />
    </vr-popper-trigger>
</template>
<script lang="ts" setup>
import { inject, ref, toRef, unref } from 'vue';
import { VrPopperTrigger } from '@/components/popper';
import { composeEventHandlers } from '@/utils';
import { useNamespace } from '@/hooks';
import { TOOLTIP_INJECTION_KEY } from '@/tokens';
import { tooltipTriggerProps } from './trigger';
import { whenTrigger } from './utils';

defineOptions({
    name: 'VrTooltipTrigger',
});

const props = defineProps(tooltipTriggerProps);

const ns = useNamespace('tooltip');
const { controlled, id, open, onOpen, onClose, onToggle } = inject(
    TOOLTIP_INJECTION_KEY,
    undefined
)!;

// TODO any is temporary, replace with `OnlyChildExpose | null` later
const triggerRef = ref<any>(null);
// 如果提供了自己手动控制的方法或者是被禁用了
const stopWhenControlledOrDisabled = () => {
    return unref(controlled) || props.disabled;
};
const trigger = toRef(props, 'trigger');

const onMouseenter = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'hover', onOpen)
);

const onMouseleave = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'hover', onClose)
);

const onClick = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'click', e => {
        // distinguish left click
        if ((e as MouseEvent).button === 0) {
            onToggle(e);
        }
    })
);

const onFocus = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'focus', onOpen)
);

const onBlur = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'focus', onClose)
);

const onContextMenu = composeEventHandlers(
    stopWhenControlledOrDisabled,
    whenTrigger(trigger, 'contextmenu', (e: Event) => {
        e.preventDefault();
        onToggle(e);
    })
);

const onKeydown = composeEventHandlers(
    stopWhenControlledOrDisabled,
    (e: KeyboardEvent) => {
        const { code } = e;
        if (props.triggerKeys.includes(code)) {
            e.preventDefault();
            onToggle(e);
        }
    }
);

defineExpose({
    /**
     * @description trigger element
     */
    triggerRef,
});
</script>
