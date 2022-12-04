import { html, LitElement, nothing, PropertyDeclarations, TemplateResult } from 'lit';

export class UiToggle extends LitElement {
	public static tagName = 'ui-toggle';

	private visible: boolean;

	public static properties: PropertyDeclarations = {
		visible: { type: Boolean, reflect: true },
	};

	public constructor() {
		super();
		this.visible = false;
	}

	protected firstUpdated(changedProperties: Map<PropertyKey, unknown>): void {
		super.firstUpdated(changedProperties);
		this.addEventListener('close', this.closeHandler);
	}

	private checkPath = (event: Event) => {
		const path: Array<EventTarget> = event.composedPath();
		const within = path.includes(this as EventTarget);
		!within && this.toggle();
	};

	private toggle(visible: boolean | undefined = undefined) {
		this.visible = visible ?? !this.visible;

		if (this.visible) {
			document.body.addEventListener('pointerdown', this.checkPath);
		}
		else {
			document.body.removeEventListener('pointerdown', this.checkPath);
		}
	}

	private close() {
		this.toggle(false);
	}

	private clickHandler() {
		this.toggle();
	}

	private closeHandler(event: Event) {
		event.stopPropagation();
		this.close();
	}

	protected render(): TemplateResult {
		return html`
			<slot @click='${this.clickHandler}'></slot>
			${this.visible ? html`<slot name='toggled'></slot>` : nothing}
		`;
	}
}

customElements.define(UiToggle.tagName, UiToggle);
