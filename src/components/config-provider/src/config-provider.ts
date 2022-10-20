import { defineComponent, renderSlot } from 'vue';
import { buildProps } from '@/utils';
import { provideGlobalConfig, useSizeProp } from '@/hooks';

import type { ExtractPropTypes } from 'vue';

export const configProviderProps = buildProps({
    // Controlling if the users want a11y features.
    a11y: {
        type: Boolean,
        default: true,
    },

    size: useSizeProp,

    // Controls if we should handle keyboard navigation
    keyboardNavigation: {
        type: Boolean,
        default: true,
    },

    zIndex: Number,

    namespace: {
        type: String,
        default: 'el',
    },
} as const);
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

const ConfigProvider = defineComponent({
    name: 'ElConfigProvider',
    props: configProviderProps,

    setup(props, { slots }) {
        const config = provideGlobalConfig(props);
        return () => renderSlot(slots, 'default', { config: config?.value });
    },
});
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>;

export default ConfigProvider;
