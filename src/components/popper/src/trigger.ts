import { buildProps, definePropType } from '@/utils/props';
import type { Measurable } from '@/tokens';

export const usePopperTriggerProps = buildProps({
    virtualRef: {
        type: definePropType<Measurable>(Object),
    },
    virtualTriggering: Boolean,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function,
    onBlur: Function,
    onContextmenu: Function,
    id: String,
    open: Boolean,
} as const);

export type PopperTriggerProps = typeof usePopperTriggerProps;
