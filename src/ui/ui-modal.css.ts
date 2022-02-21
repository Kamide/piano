import { css } from 'lit';

export default css`

:host {
	display: block;
	position: absolute;
	z-index: 1;
}

[part='grid'] {
	background: white;
	border-radius: 0.25em;
	box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3), 0 0.5em 1em rgba(0, 0, 0, 0.2), 0 1em 2em rgba(0, 0, 0, 0.1);
	color: black;
	overflow: auto;
}

[part='head'] {
	align-items: center;
	border-block-end: thin solid rgba(0, 0, 0, 0.2);
	display: grid;
	font-size: 0.8em;
	grid-template-columns: 1fr auto;
}

[part='close-button'] {
	all: unset;
	user-select: none;
}

[part='title'], [part='close-button'], [part='body'] {
	padding: 1em;
}

[part='title'] {
	font-weight: bold;
}

[part='close-button']:hover, [part='close-button']:focus {
	background: rgba(0, 0, 0, 0.1);
}

[part='close-button']:active {
	background: rgba(0, 0, 0, 0.2);
}

`;
