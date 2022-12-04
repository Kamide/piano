import { getWritingDirection, LogicalAxis, LogicalEdge, LogicalSize, WritingDirection } from './get-writing-direction';

export type LogicalRect = {
	physicalRect: DOMRect;
	writingDirection: WritingDirection;
} & {
	[P in LogicalAxis | LogicalEdge | LogicalSize]: number;
};

export function getLogicalRect(element: Element): LogicalRect {
	const writingDirection: WritingDirection = getWritingDirection(element);
	const physicalRect: DOMRect = element.getBoundingClientRect();
	const logicalRect: Partial<LogicalRect> = { physicalRect, writingDirection };

	for (const direction of ['left', 'right', 'top', 'bottom', 'width', 'height']) {
		logicalRect[writingDirection[direction as keyof WritingDirection]] = physicalRect[direction as keyof DOMRect] as number;
	}

	return logicalRect as LogicalRect;
}
