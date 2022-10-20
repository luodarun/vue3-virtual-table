<template>
    <vr-popper ref="popperRef" :role="role">
        <!-- 触发器 -->
        <vr-tooltip-trigger
            :disabled="disabled"
            :trigger="trigger"
            :trigger-keys="triggerKeys"
            :virtual-ref="virtualRef"
            :virtual-triggering="virtualTriggering"
        >
            <slot v-if="$slots.default" />
        </vr-tooltip-trigger>
        <!-- 弹窗内容 -->
        <vr-tooltip-content
            ref="contentRef"
            :aria-label="ariaLabel"
            :boundaries-padding="boundariesPadding"
            :content="content"
            :disabled="disabled"
            :effect="effect"
            :enterable="enterable"
            :fallback-placements="fallbackPlacements"
            :hide-after="hideAfter"
            :gpu-acceleration="gpuAcceleration"
            :offset="offset"
            :persistent="persistent"
            :popper-class="popperClass"
            :popper-style="popperStyle"
            :placement="placement"
            :popper-options="popperOptions"
            :pure="pure"
            :raw-content="rawContent"
            :reference-el="referenceEl"
            :trigger-target-el="triggerTargetEl"
            :show-after="showAfter"
            :strategy="strategy"
            :teleported="teleported"
            :transition="transition"
            :virtual-triggering="virtualTriggering"
            :z-index="zIndex"
            :append-to="appendTo"
        >
            <slot name="content">
                <span v-if="rawContent" v-html="content" />
                <span v-else>{{ content }}</span>
            </slot>
            <!-- 箭头 -->
            <vr-popper-arrow v-if="showArrow" :arrow-offset="arrowOffset" />
        </vr-tooltip-content>
    </vr-popper>
</template>
<script lang="ts" setup>
import {
    computed,
    onDeactivated,
    provide,
    readonly,
    ref,
    toRef,
    unref,
    watch,
} from 'vue';
import { VrPopper, VrPopperArrow } from '@/components/popper';

import { isBoolean } from '@/utils/types';
import { useDelayedToggle } from '@/hooks/useDelayedToggle';
import { useId } from '@/hooks/useId';
import { usePopperContainer } from '@/hooks/usePopperContainer';
import { TOOLTIP_INJECTION_KEY } from '@/tokens';
import { tooltipEmits, tooltipModelToggle, tooltipProps } from './tooltip';
import VrTooltipTrigger from './trigger.vue';
import VrTooltipContent from './content.vue';

defineOptions({
    name: 'VrTooltip',
});

const props = defineProps(tooltipProps);
const emit = defineEmits(tooltipEmits);

usePopperContainer();

const id = useId();
// TODO any is temporary, replace with `InstanceType<typeof VrPopper> | null` later
const popperRef = ref<any>();
// TODO any is temporary, replace with `InstanceType<typeof VrTooltipContent> | null` later
const contentRef = ref<any>();

const updatePopper = () => {
    const popperComponent = unref(popperRef);
    if (popperComponent) {
        popperComponent.popperInstanceRef?.update();
    }
};
const open = ref(false);
const toggleReason = ref<Event>();

const { show, hide, hasUpdateHandler } = tooltipModelToggle({
    indicator: open,
    toggleReason,
});

const { onOpen, onClose } = useDelayedToggle({
    showAfter: toRef(props, 'showAfter'),
    hideAfter: toRef(props, 'hideAfter'),
    open: show,
    close: hide,
});

// 如果绑定了visible属性或者绑定了`onUpdate:modelValue`,说明这个tooltip是自己控制的
const controlled = computed(
    () => isBoolean(props.visible) && !hasUpdateHandler.value
);

provide(TOOLTIP_INJECTION_KEY, {
    controlled,
    id,
    open: readonly(open),
    trigger: toRef(props, 'trigger'),
    onOpen: (event?: Event) => {
        onOpen(event);
    },
    onClose: (event?: Event) => {
        onClose(event);
    },
    onToggle: (event?: Event) => {
        if (unref(open)) {
            onClose(event);
        } else {
            onOpen(event);
        }
    },
    onShow: () => {
        emit('show', toggleReason.value);
    },
    onHide: () => {
        emit('hide', toggleReason.value);
    },
    onBeforeShow: () => {
        emit('before-show', toggleReason.value);
    },
    onBeforeHide: () => {
        emit('before-hide', toggleReason.value);
    },
    updatePopper,
});

watch(
    () => props.disabled,
    disabled => {
        if (disabled && open.value) {
            open.value = false;
        }
    }
);

const isFocusInsideContent = () => {
    const popperContent: HTMLElement | undefined =
        contentRef.value?.contentRef?.popperContentRef;
    return popperContent && popperContent.contains(document.activeElement);
};

onDeactivated(() => open.value && hide());

defineExpose({
    /**
     * @description vr-popper component instance
     */
    popperRef,
    /**
     * @description vr-tooltip-content component instance
     */
    contentRef,
    /**
     * @description validate current focus event is trigger inside vr-tooltip-content
     */
    isFocusInsideContent,
    /**
     * @description update vr-popper component instance
     */
    updatePopper,
    /**
     * @description expose onOpen function to mange vr-tooltip open state
     */
    onOpen,
    /**
     * @description expose onOpen function to mange vr-tooltip open state
     */
    onClose,
    /**
     * @description expose hide function
     */
    hide,
});
</script>
