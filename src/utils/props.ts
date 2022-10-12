import { warn } from 'vue';
import { fromPairs } from 'lodash-unified';
import { isObject } from './types';
import { hasOwn } from './object';
import type { ExtractPropTypes, PropType } from 'vue';

const wrapperKey = Symbol();
export type PropWrapper<T> = { [wrapperKey]: T };

export const propKey = '__vrPropsReservedKey';

type ResolveProp<T> = ExtractPropTypes<{
    key: { type: T; required: true };
}>['key'];

// 如果T有type属性，那么返回这个type的属性，否则返回这个prop传参的对象，传入数组时会返回数组中能推论的类型，等于说这个ResolvePropType函数其实就是返回prop传参的type属性，如果是type传的是数组，将会返回数组的组成元素
type ResolvePropType<T> = ResolveProp<T> extends { type: infer V }
    ? V
    : ResolveProp<T>;

// 如果T是一个元素类型统一的数组，返回这个数组中元素类型，否则返回T类型
type ResolvePropTypeWithReadonly<T> = Readonly<T> extends Readonly<
    Array<infer A>
>
    ? ResolvePropType<A[]>
    : ResolvePropType<T>;

// 如果T是unknown那么取V如果不是取T
type IfUnknown<T, V> = [unknown] extends [T] ? V : T;

export type BuildPropOption<T, D extends BuildPropType<T, V, C>, R, V, C> = {
    type?: T;
    values?: readonly V[];
    required?: R;
    default?: R extends true
        ? never
        : D extends Record<string, unknown> | Array<any>
        ? () => D
        : (() => D) | D;
    // eslint-disable-next-line no-unused-vars
    validator?: ((val: any) => val is C) | ((val: any) => boolean);
};

// 联合类型，如果T是只包含一个key是Symbol类型的,value是unknown类型的对象，那么取unknown类型,如果不是，判断V是不是nerve类型，如果是返回T的解析类型，否则返回nerve
// T[typeof wrapperKey]这里的语法表明的是去这个对象类型中的value值的类型，正常js语句中获取value的语法为Obj[key], 对应到ts声明中应该是typeof Obj[typeof key]
type _BuildPropType<T, V, C> =
    | (T extends PropWrapper<unknown>
          ? T[typeof wrapperKey]
          : [V] extends [never]
          ? ResolvePropTypeWithReadonly<T>
          : never)
    | V
    | C;

export type BuildPropType<T, V, C> = _BuildPropType<
    IfUnknown<T, never>,
    IfUnknown<V, never>,
    IfUnknown<C, never>
>;

type _BuildPropDefault<T, D> = [T] extends [
    // eslint-disable-next-line @typescript-eslint/ban-types
    Record<string, unknown> | Array<any> | Function
]
    ? D
    : D extends () => T
    ? ReturnType<D>
    : D;

export type BuildPropDefault<T, D, R> = R extends true
    ? { readonly default?: undefined }
    : {
          readonly default: Exclude<D, undefined> extends never
              ? undefined
              : Exclude<_BuildPropDefault<T, D>, undefined>;
      };

export type BuildPropReturn<T, D, R, V, C> = {
    readonly type: PropType<BuildPropType<T, V, C>>;
    readonly required: IfUnknown<R, false>;
    // eslint-disable-next-line no-unused-vars
    readonly validator: ((val: unknown) => boolean) | undefined;
    [propKey]: true;
} & BuildPropDefault<
    BuildPropType<T, V, C>,
    IfUnknown<D, never>,
    IfUnknown<R, false>
>;

/**
 * @description Build prop. It can better optimize prop types
 * @description 生成 prop，能更好地优化类型
 * @example
  // limited options
  // the type will be PropType<'light' | 'dark'>
  buildProp({
    type: String,
    values: ['light', 'dark'],
  } as const)
  * @example
  // limited options and other types
  // the type will be PropType<'small' | 'large' | number>
  buildProp({
    type: [String, Number],
    values: ['small', 'large'],
    validator: (val: unknown): val is number => typeof val === 'number',
  } as const)
  @link see more: https://github.com/element-plus/element-plus/pull/3341
 */
export function buildProp<
    T = never,
    D extends BuildPropType<T, V, C> = never,
    R extends boolean = false,
    V = never,
    C = never
>(
    option: BuildPropOption<T, D, R, V, C>,
    key?: string
): BuildPropReturn<T, D, R, V, C> {
    // filter native prop type and nested prop, e.g `null`, `undefined` (from `buildProps`)
    if (!isObject(option) || !!(option as any)[propKey]) return option as any;

    const { values, required, default: defaultValue, type, validator } = option;

    const _validator =
        values || validator
            ? (val: unknown) => {
                  let valid = false;
                  let allowedValues: unknown[] = [];

                  if (values) {
                      allowedValues = Array.from(values);
                      if (hasOwn(option, 'default')) {
                          allowedValues.push(defaultValue);
                      }
                      valid ||= allowedValues.includes(val);
                  }
                  if (validator) valid ||= validator(val);

                  if (!valid && allowedValues.length > 0) {
                      const allowValuesText = [...new Set(allowedValues)]
                          .map(value => JSON.stringify(value))
                          .join(', ');
                      warn(
                          `Invalid prop: validation failed${
                              key ? ` for prop "${key}"` : ''
                          }. Expected one of [${allowValuesText}], got value ${JSON.stringify(
                              val
                          )}.`
                      );
                  }
                  return valid;
              }
            : undefined;

    const prop: any = {
        type:
            isObject(type) &&
            Object.getOwnPropertySymbols(type).includes(wrapperKey)
                ? (type as any)[wrapperKey]
                : type,
        required: !!required,
        validator: _validator,
        [propKey]: true,
    };
    if (hasOwn(option, 'default')) prop.default = defaultValue;

    return prop as BuildPropReturn<T, D, R, V, C>;
}

type NativePropType = [
    // eslint-disable-next-line no-unused-vars
    ((...args: any) => any) | { new (...args: any): any } | undefined | null
];

// 这个是用来干啥的？

// export const usePopperArrowProps = buildProps({
//     arrowOffset: {
//         type: Number,
//         default: 5,
//     },
// } as const);

export const buildProps = <
    O extends {
        [K in keyof O]: O[K] extends BuildPropReturn<any, any, any, any, any>
            ? O[K]
            : [O[K]] extends NativePropType
            ? O[K]
            : O[K] extends BuildPropOption<
                  infer T,
                  infer D,
                  infer R,
                  infer V,
                  infer C
              >
            ? D extends BuildPropType<T, V, C>
                ? BuildPropOption<T, D, R, V, C>
                : never
            : never;
    }
>(
    props: O
) =>
    // 返回一个新对象。
    fromPairs(
        Object.entries(props).map(([key, option]) => [
            key,
            buildProp(option as any, key),
        ])
    ) as unknown as {
        [K in keyof O]: O[K] extends { [propKey]: boolean }
            ? O[K]
            : [O[K]] extends NativePropType
            ? O[K]
            : O[K] extends BuildPropOption<
                  infer T,
                  // eslint-disable-next-line no-unused-vars
                  infer _D,
                  infer R,
                  infer V,
                  infer C
              >
            ? BuildPropReturn<T, O[K]['default'], R, V, C>
            : never;
    };

export const definePropType = <T>(val: any) =>
    ({ [wrapperKey]: val } as PropWrapper<T>);
