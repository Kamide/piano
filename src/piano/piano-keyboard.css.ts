import { css } from 'lit';

export default css`

:host {
	display: block;
	touch-action: none;
}

[part='grid'] {
	block-size: 100%;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(14, 1fr);
	grid-template-rows: repeat(8, 1fr);
	inline-size: 100%;
	padding-block-end: 0.75em;
	padding-block-start: 0.125em;
	padding-inline: 0.25em;
	transition: opacity 0.125s;
}

:host(:not(:focus):not(:focus-within)) [part='grid'] {
	opacity: 0.5;
}

`;
