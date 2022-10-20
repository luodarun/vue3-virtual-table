import { buildProps } from '@/utils/props';
import { createModelToggleComposable } from '@/hooks';
import { popperArrowProps, popperProps } from '@/components/popper';
import { tooltipContentProps } from './content';
import { tooltipTriggerProps } from './trigger';
import type Tooltip from './tooltip.vue';

import type { ExtractPropTypes } from 'vue';

export const {
    useModelToggleProps: tooltipModelToggleProps,
    useModelToggleEmits: tooltipModelToggleEmits,
    useModelToggle: tooltipModelToggle,
} = createModelToggleComposable('visible' as const);

export const tooltipProps = buildProps({
    ...popperProps,
    ...tooltipModelToggleProps,
    ...tooltipContentProps,
    ...tooltipTriggerProps,
    ...popperArrowProps,
    showArrow: {
        type: Boolean,
        default: true,
    },
});

export const tooltipEmits = [
    ...tooltipModelToggleEmits,
    'before-show',
    'before-hide',
    'show',
    'hide',
    'open',
    'close',
];

export type VrTooltipProps = ExtractPropTypes<typeof tooltipProps>;

export type TooltipInstance = InstanceType<typeof Tooltip>;
