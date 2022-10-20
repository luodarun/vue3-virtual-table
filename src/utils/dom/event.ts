// 第一个处理函数将会影响第二处理函数的执行，等于是将前提和执行分隔开了
export const composeEventHandlers = <E>(
    theirsHandler?: (event: E) => boolean | void,
    oursHandler?: (event: E) => void,
    { checkForDefaultPrevented = true } = {}
) => {
    const handleEvent = (event: E) => {
        const shouldPrevent = theirsHandler?.(event);

        if (checkForDefaultPrevented === false || !shouldPrevent) {
            return oursHandler?.(event);
        }
    };
    return handleEvent;
};

type WhenMouseHandler = (e: PointerEvent) => any;
export const whenMouse = (handler: WhenMouseHandler): WhenMouseHandler => {
    return (e: PointerEvent) =>
        e.pointerType === 'mouse' ? handler(e) : undefined;
};
