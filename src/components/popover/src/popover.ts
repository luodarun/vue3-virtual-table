import { buildProps } from '@/utils/props';
import { isBoolean } from '@/utils/types';
import {
  tooltipContentProps,
  tooltipTriggerProps,
} from '@/components/tooltip'
import { dropdownProps } from '@/components/dropdown'
import type { ExtractPropTypes, PropType } from 'vue'
import type Popover from './popover.vue'

export const popoverProps = buildProps({
  trigger: tooltipTriggerProps.trigger,
  placement: dropdownProps.placement,
  disabled: tooltipTriggerProps.disabled,
  visible: tooltipContentProps.visible,
  transition: tooltipContentProps.transition,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
  content: tooltipContentProps.content,
  popperStyle: tooltipContentProps.popperStyle,
  popperClass: tooltipContentProps.popperClass,
  enterable: {
    ...tooltipContentProps.enterable,
    default: true,
  },
  effect: {
    ...tooltipContentProps.effect,
    default: 'light',
  },
  teleported: tooltipContentProps.teleported,
  title: String,

  width: {
    type: [String, Number],
    default: 150,
  },
  offset: {
    type: Number,
    default: undefined,
  },
  showAfter: {
    type: Number,
    default: 0,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
  autoClose: {
    type: Number,
    default: 0,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  persistent: {
    type: Boolean,
    default: true,
  },
  'onUpdate:visible': {
    type: Function as PropType<(visible: boolean) => void>,
  },
} as const)
export type PopoverProps = ExtractPropTypes<typeof popoverProps>

export const popoverEmits = {
  'update:visible': (value: boolean) => isBoolean(value),
  'before-enter': () => true,
  'before-leave': () => true,
  'after-enter': () => true,
  'after-leave': () => true,
}
export type PopoverEmits = typeof popoverEmits

export type PopoverInstance = InstanceType<typeof Popover>
