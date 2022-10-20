import { withInstall } from '@/utils/install';
import Tooltip from './src/tooltip.vue';
import './style/index';
export const VrTooltip = withInstall(Tooltip);
export * from './src/tooltip';
export * from './src/trigger';
export * from './src/content';
export default VrTooltip;
