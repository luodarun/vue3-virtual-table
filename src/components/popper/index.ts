import { withInstall } from '../../utils/install';
import Popper from './src/popper.vue';

import VrPopperArrow from './src/arrow.vue';
import VrPopperTrigger from './src/trigger.vue';
import VrPopperContent from './src/content.vue';

export { VrPopperArrow, VrPopperTrigger, VrPopperContent };

export const VrPopper = withInstall(Popper);
export default VrPopper;

export * from './src/popper';
export * from './src/trigger';
export * from './src/content';
export * from './src/arrow';

export type { Placement, Options } from '@popperjs/core';
export type VrPopperArrowInstance = InstanceType<typeof VrPopperArrow>;
export type VrPopperArrowTrigger = InstanceType<typeof VrPopperTrigger>;
export type VrPopperArrowContent = InstanceType<typeof VrPopperContent>;
