import { withInstall, withInstallDirective } from '@/utils/install';

import Popover from './src/popover.vue';
import PopoverDirective, { VPopover } from './src/directive';

export const VrPopoverDirective = withInstallDirective(
    PopoverDirective,
    VPopover
);

export const VrPopover = withInstall(Popover, {
    directive: VrPopoverDirective,
});
export default VrPopover;

export * from './src/popover';
