export function isHTMLElement(element: unknown): element is HTMLElement {
	return element instanceof HTMLElement;
}

export function isTouch(event: PointerEvent): boolean {
	return event.pointerType === "touch";
}
