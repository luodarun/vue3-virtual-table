import { buildProps } from '@/utils/props';

import type { ExtractPropTypes } from 'vue';

export const popperArrowProps = buildProps({
    arrowOffset: {
        type: Number,
        default: 5,
    },
} as const);

export type PopperArrowProps = ExtractPropTypes<typeof popperArrowProps>;
