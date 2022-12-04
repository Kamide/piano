export type PhysicalAxis = 'x' | 'y';
export type LogicalAxis = 'inline' | 'block';

export type PhysicalEdge = 'left' | 'right' | 'top' | 'bottom';
export type LogicalEdge = 'inlineStart' | 'inlineEnd' | 'blockStart' | 'blockEnd';

export type PhysicalSize = 'width' | 'height';
export type LogicalSize = 'inlineSize' | 'blockSize';

export type WritingDirection = {
	[P in PhysicalAxis]: LogicalAxis;
} & {
	[P in PhysicalEdge]: LogicalEdge;
} & {
	[P in PhysicalSize]: LogicalSize;
};

export function getWritingDirection(element: Element): WritingDirection {
	const style: CSSStyleDeclaration = getComputedStyle(element);
	const { writingMode, direction }: CSSStyleDeclaration = style;

	let x: LogicalAxis;
	let y: LogicalAxis;

	let left: LogicalEdge;
	let right: LogicalEdge;
	let top: LogicalEdge;
	let bottom: LogicalEdge;

	let width: LogicalSize;
	let height: LogicalSize;

	if (writingMode.startsWith('horizontal')) {
		x = 'inline';
		width = 'inlineSize';

		y = 'block';
		height = 'blockSize';

		if (direction === 'ltr') {
			left = 'inlineStart';
			right = 'inlineEnd';
		}
		else /* if (direction === 'rtl') */ {
			right = 'inlineStart';
			left = 'inlineEnd';
		}

		if (writingMode.endsWith('-tb')) {
			top = 'blockStart';
			bottom = 'blockEnd';
		}
		else /* if (writingMode.endsWith('-bt')) */ {
			bottom = 'blockStart';
			top = 'blockEnd';
		}
	}
	else /* if (writingMode.startsWith('vertical')) */ {
		y = 'inline';
		height = 'inlineSize';

		x = 'block';
		width = 'blockSize';

		if (direction === 'ltr') {
			top = 'inlineStart';
			bottom = 'inlineEnd';
		}
		else /* if (direction === 'rtl') */ {
			bottom = 'inlineStart';
			top = 'inlineEnd';
		}

		if (writingMode.endsWith('-rl')) {
			right = 'blockStart';
			left = 'blockEnd';
		}
		else /* if (writingMode.endsWith('-lr')) */ {
			left = 'blockStart';
			right = 'blockEnd';
		}
	}

	return { x, y, left, right, top, bottom, width, height };
}
