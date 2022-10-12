import { createPopper } from '@popperjs/core';
import { get } from 'lodash-unified';
import escapeHtml from 'escape-html';
import { off, on } from '../utils/event';
import { hasOwn } from '../utils/object';
import { useZIndex } from '../hooks/useZIndex';
import type {
  IPopperOptions,
  PopperInstance
} from '../components/popper';
import type { Nullable } from '@element-plus/utils';
import type { TableColumnCtx } from './table-column/defaults';

export const getCell = function (event: Event): HTMLElement {
  let cell = event.target as HTMLElement;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode as HTMLElement;
  }

  return null;
};

const isObject = function (obj: unknown): boolean {
  return obj !== null && typeof obj === 'object';
};

export const orderBy = function <T> (
  array: T[],
  sortKey: string,
  reverse: string | number,
  sortMethod: (arg0: any, arg1: any) => any,
  sortBy: string | (string | ((a: T, b: number, array?: T[]) => number))[]
) {
  if (
    !sortKey &&
    !sortMethod &&
    (!sortBy || (Array.isArray(sortBy) && !sortBy.length))
  ) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod
    ? null
    : function (value: any, index: number) {
      if (sortBy) {
        if (!Array.isArray(sortBy)) {
          sortBy = [sortBy];
        }
        return sortBy.map((by) => {
          if (typeof by === 'string') {
            return get(value, by);
          } else {
            return by(value, index, array);
          }
        });
      }
      if (sortKey !== '$key') {
        if (isObject(value) && '$value' in value) value = value.$value;
      }
      return [isObject(value) ? get(value, sortKey) : value];
    };
  const compare = function (a: { value: any; index?: number; key: any; }, b: { value: any; index?: number; key: any; }) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array
    .map((value, index) => {
      return {
        value,
        index,
        key: getKey ? getKey(value, index) : null
      };
    })
    .sort((a, b) => {
      let order = compare(a, b);
      if (!order) {
        // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
        order = a.index - b.index;
      }
      return order * +reverse;
    })
    .map((item) => item.value);
};

export const getColumnById = function <T> (
  table: {
    columns: TableColumnCtx<T>[]
  },
  columnId: string
): null | TableColumnCtx<T> {
  let column = null;
  table.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

export const getColumnByKey = function <T> (
  table: {
    columns: TableColumnCtx<T>[]
  },
  columnKey: string
): TableColumnCtx<T> {
  let column = null;
  for (let i = 0; i < table.columns.length; i++) {
    const item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};

export const getColumnByCell = function <T> (
  table: {
    columns: TableColumnCtx<T>[]
  },
  cell: HTMLElement,
  namespace: string
): null | TableColumnCtx<T> {
  const matches = (cell.className || '').match(
    new RegExp(`${namespace}-table_[^\\s]+`, 'gm')
  );
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

export const getRowIdentity = <T>(
  row: T,
  rowKey: string | ((row: T) => any)
): string => {
  if (!row) throw new Error('Row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (!rowKey.includes('.')) {
      return `${(row as any)[rowKey]}`;
    }
    const key = rowKey.split('.');
    let current = row;
    for (const element of key) {
      current = (current as any)[element];
    }
    return `${current}`;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
  return '';
};

export const getKeysMap = function <T> (
  array: T[],
  rowKey: string
): Record<string, { row: T; index: number }> {
  const arrayMap: Record<string, { row: T; index: number }> = {}
  ;(array || []).forEach((row, index) => {
    arrayMap[getRowIdentity(row, rowKey)] = { row, index };
  });
  return arrayMap;
};

export function mergeOptions<T, K> (defaults: T, config: K): T & K {
  const options = {} as T & K;
  let key;
  for (key in defaults) {
    (options as any)[key] = (defaults as any)[key];
  }
  for (key in config) {
    if (hasOwn(config as unknown as Record<string, any>, key)) {
      const value = config[key];
      if (typeof value !== 'undefined') {
        options[key] = value;
      }
    }
  }
  return options;
}

export function parseWidth (width: number | string): number | string {
  if (width === '') return width;
  if (width !== undefined) {
    width = Number.parseInt(width as string, 10);
    if (Number.isNaN(width)) {
      width = '';
    }
  }
  return width;
}

export function parseMinWidth (minWidth: number | string): number | string {
  if (minWidth === '') return minWidth;
  if (minWidth !== undefined) {
    minWidth = parseWidth(minWidth);
    if (Number.isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}

export function parseHeight (height: number | string) {
  if (typeof height === 'number') {
    return height;
  }
  if (typeof height === 'string') {
    if (/^\d+(?:px)?$/.test(height)) {
      return Number.parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}

// https://github.com/reduxjs/redux/blob/master/src/compose.js
export function compose (...funcs: any[]) {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
      (...args: any) =>
        a(b(...args))
  );
}

export function toggleRowStatus<T> (
  statusArr: T[],
  row: T,
  newVal: boolean
): boolean {
  let changed = false;
  const index = statusArr.indexOf(row);
  const included = index !== -1;

  const addRow = () => {
    statusArr.push(row);
    changed = true;
  };
  const removeRow = () => {
    statusArr.splice(index, 1);
    changed = true;
  };

  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}

export function walkTreeNode (
  root: { [x: string]: any; }[],
  cb: (arg0: { [x: string]: any; }, arg1: any[] | null, arg2: number) => void,
  childrenKey = 'children',
  lazyKey = 'hasChildren'
) {
  const isNil = (array: string | any[]) => !(Array.isArray(array) && array.length);

  function _walker (parent: { [x: string]: any; }, children: any[], level: number) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children = item[childrenKey];
      if (!isNil(children)) {
        _walker(item, children, level + 1);
      }
    });
  }

  root.forEach((item: { [x: string]: any; }) => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}

export let removePopper: EventListenerOrEventListenerObject;

export function createTablePopper (
  trigger: HTMLElement,
  popperContent: string,
  popperOptions: Partial<IPopperOptions>,
  tooltipEffect: string
) {
  const { nextZIndex } = useZIndex();
  function renderContent (): HTMLDivElement {
    const isLight = tooltipEffect === 'light';
    const content = document.createElement('div');
    content.className = `el-popper ${isLight ? 'is-light' : 'is-dark'}`;
    popperContent = escapeHtml(popperContent);
    content.innerHTML = popperContent;
    content.style.zIndex = String(nextZIndex());
    document.body.appendChild(content);
    return content;
  }
  function renderArrow (): HTMLDivElement {
    const arrow = document.createElement('div');
    arrow.className = 'el-popper__arrow';
    return arrow;
  }
  function showPopper () {
    popperInstance && popperInstance.update();
  }
  removePopper = function removePopper () {
    try {
      popperInstance && popperInstance.destroy();
      content && document.body.removeChild(content);
      off(trigger, 'mouseenter', showPopper);
      off(trigger, 'mouseleave', removePopper);
    } catch {}
  };
  let popperInstance: Nullable<PopperInstance> = null;
  const content = renderContent();
  const arrow = renderArrow();
  content.appendChild(arrow);

  popperInstance = createPopper(trigger, content, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      },
      {
        name: 'arrow',
        options: {
          element: arrow,
          padding: 10
        }
      }
    ],
    ...popperOptions
  });
  on(trigger, 'mouseenter', showPopper);
  on(trigger, 'mouseleave', removePopper);
  return popperInstance;
}

export const isFixedColumn = <T>(
  index: number,
  fixed: string | boolean,
  store: any,
  realColumns?: TableColumnCtx<T>[]
) => {
  let start = 0;
  let after = index;
  if (realColumns) {
    if (realColumns[index].colSpan > 1) {
      // fixed column not supported in grouped header
      return {};
    }
    // handle group
    for (let i = 0; i < index; i++) {
      start += realColumns[i].colSpan;
    }
    after = start + realColumns[index].colSpan - 1;
  } else {
    start = index;
  }
  let fixedLayout;
  const columns = store.states.columns;
  switch (fixed) {
    case 'left':
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = 'left';
      }
      break;
    case 'right':
      if (
        start >=
        columns.value.length - store.states.rightFixedLeafColumnsLength.value
      ) {
        fixedLayout = 'right';
      }
      break;
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = 'left';
      } else if (
        start >=
        columns.value.length - store.states.rightFixedLeafColumnsLength.value
      ) {
        fixedLayout = 'right';
      }
  }
  return fixedLayout
    ? {
        direction: fixedLayout,
        start,
        after
      }
    : {};
};

export const getFixedColumnsClass = <T>(
  namespace: string,
  index: number,
  fixed: string | boolean,
  store: any,
  realColumns?: TableColumnCtx<T>[]
) => {
  const classes: string[] = [];
  const { direction, start } = isFixedColumn(index, fixed, store, realColumns);
  if (direction) {
    const isLeft = direction === 'left';
    classes.push(`${namespace}-fixed-column--${direction}`);
    if (isLeft && start === store.states.fixedLeafColumnsLength.value - 1) {
      classes.push('is-last-column');
    } else if (
      !isLeft &&
      start ===
        store.states.columns.value.length -
          store.states.rightFixedLeafColumnsLength.value
    ) {
      classes.push('is-first-column');
    }
  }
  return classes;
};

function getOffset<T> (offset: number, column: TableColumnCtx<T>) {
  return (
    offset +
    (column.realWidth === null || Number.isNaN(column.realWidth)
      ? Number(column.width)
      : column.realWidth)
  );
}

export const getFixedColumnOffset = <T>(
  index: number,
  fixed: string | boolean,
  store: any,
  realColumns?: TableColumnCtx<T>[]
) => {
  const { direction, start = 0 } = isFixedColumn(
    index,
    fixed,
    store,
    realColumns
  );
  if (!direction) {
    return;
  }
  const styles: any = {};
  const isLeft = direction === 'left';
  const columns = store.states.columns.value;
  if (isLeft) {
    styles.left = columns.slice(0, index).reduce(getOffset, 0);
  } else {
    styles.right = columns
      .slice(start + 1)
      .reverse()
      .reduce(getOffset, 0);
  }
  return styles;
};

export const ensurePosition = (style: any, key: string) => {
  if (!style) return;
  if (!Number.isNaN(style[key])) {
    style[key] = `${style[key]}px`;
  }
};