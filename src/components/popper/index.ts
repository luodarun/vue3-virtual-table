import { withInstall } from '../../utils/install';
import Popper from './src/popper.vue';

import PopperArrow from './src/arrow.vue';
import PopperTrigger from './src/trigger.vue';
import PopperContent from './src/content.vue';

export { PopperArrow, PopperTrigger, PopperContent };

export const VrPopper = withInstall(Popper);
export default VrPopper;

export * from './src/popper';
export * from './src/trigger';
export * from './src/content';
export * from './src/arrow';
export { useDeprecateAppendToBody } from './src/deprecation';

export type { Placement, Options } from '@popperjs/core';
export type ElPopperArrowInstance = InstanceType<typeof PopperArrow>;
export type ElPopperArrowTrigger = InstanceType<typeof PopperTrigger>;
export type ElPopperArrowContent = InstanceType<typeof PopperContent>;
