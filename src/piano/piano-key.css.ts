import { css } from 'lit';

export default css`

:host {
	display: block;
}

[part~='key'] {
	all: unset;
	user-select: none;
}

[part~='key'], [part='labels'] {
	block-size: 100%;
	box-sizing: border-box;
	inline-size: 100%;
	position: relative;
}

[part~='natural'] {
	--background: white;
	--border-color: hsl(0, 0%, 30%);
	--font-size: 1em;
	--text-color: black;
}

[part~='accidental'] {
	--background: hsl(0, 0%, 10%);
	--border-color: hsl(0, 0%, 30%);
	--font-size: 0.8em;
	--text-color: white;
}

[part='labels'] {
	align-items: end;
	background: var(--background);
	border-radius: 0.25em;
	border: 0.0625em solid var(--border-color);
	box-shadow: 0 0.125em 0.0625em rgba(0, 0, 0, 0.3), 0 0.25em 0.125em rgba(0, 0, 0, 0.2), 0 0.5em 0.25em rgba(0, 0, 0, 0.1);
	color: var(--text-color);
	display: grid;
	font-size: var(--font-size);
	grid-template-rows: 1fr auto;
	inset-block-start: 0;
	justify-items: center;
	padding: 0.5em;
	pointer-events: none;
	transition: inset-block-start 0.125s;
}

[part~='down'] [part='labels'] {
	inset-block-start: 0.5em;
	position: absolute;
	transition: none;
}

`;
