import { buildProps, definePropType } from '@/utils';
import { popperTriggerProps } from '@/components/popper';
import { EVENT_CODE } from '@/constants';
import type { Arrayable } from '@/utils';
import type { ExtractPropTypes } from 'vue';

export type TooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu';

// export const definePropType = <T>(val: any): PropType<T> => val;

export const tooltipTriggerProps = buildProps({
    ...popperTriggerProps,
    disabled: Boolean,
    // 如何触发 tooltip (来显示)
    trigger: {
        type: definePropType<Arrayable<TooltipTriggerType>>([String, Array]),
        default: 'hover',
    },
    // 当鼠标点击或者聚焦在触发元素上时， 可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示
    triggerKeys: {
        type: definePropType<string[]>(Array),
        default: () => [EVENT_CODE.enter, EVENT_CODE.space],
    },
} as const);

export type VrTooltipTriggerProps = ExtractPropTypes<
    typeof tooltipTriggerProps
>;
