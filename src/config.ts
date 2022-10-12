import { buildProps } from './utils/props';
export const configProviderProps = buildProps({
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: 'vr'
  }
} as const);
