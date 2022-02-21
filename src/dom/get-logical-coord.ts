import { LogicalRect } from './get-logical-rect';
import { LogicalAxis } from './get-writing-direction';

type LogicalCoord = {
	[P in LogicalAxis]: number; // [0, 1]
};

function getLogicalCoord(logicalRect: LogicalRect, inlineOffset: number, blockOffset: number): LogicalCoord {
	const inline = logicalRect.inlineStart + (logicalRect.inlineEnd - logicalRect.inlineStart) * inlineOffset;
	const block = logicalRect.blockStart + (logicalRect.blockEnd - logicalRect.blockStart) * blockOffset;
	return { inline, block };
}

export { LogicalCoord, getLogicalCoord };
