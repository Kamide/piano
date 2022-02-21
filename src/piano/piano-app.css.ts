import { css } from 'lit';

export default css`

:host {
	display: block;
}

.grid {
	block-size: 100%;
	display: grid;
	grid-template-rows: auto 1fr;
	inline-size: 100%;
}

.menu {
	color: white;
	display: grid;
	grid-template-columns: auto auto 1fr auto;
	padding-block-end: 0.125em;
	padding-block-start: 0.25em;
	padding-inline: 0.25em;
}

.menu-item {
	all: unset;
	box-sizing: border-box;
	inline-size: 100%;
	padding-block: 0.5em;
	padding-inline: 0.75em;
}

.menu-item:hover {
	background: gray;
	border-radius: 0.25em;
	user-select: none;
}

[part='form'] {
	display: grid;
	gap: 1em;
}

[part='input-group'] {
	display: block;
}

[part='input-label'] {
	display: block;
	margin-block-end: 0.25em;
}

[part~='input'] {
	font-size: 0.875em;
	padding: 0.5em;
}

[part='volume-slider'] {
	inline-size: 10em;
}

piano-keyboard::part(key) {
	background: red;
}

`;
