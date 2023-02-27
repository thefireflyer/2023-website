/**
 * @param {any} node
 * @param {any} styles
 */
export function styles(node, styles) {
	setCustomProperties(node, styles)
	
	return {
		/**
         * @param {any} styles
         */
		update(styles) {
			setCustomProperties(node, styles)
		}
	};
}

/**
 * @param {{ style: { setProperty: (arg0: string, arg1: any) => void; }; }} node
 * @param {{ [s: string]: any; } | ArrayLike<any>} styles
 */
function setCustomProperties(node, styles) {
	Object.entries(styles).forEach(([key, value]) => {
		node.style.setProperty(`--${key}`, value)
	})
}