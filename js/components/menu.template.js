export const Menu = (pages) => {
	return `
		<ul>
				${pages.map(({ id, title }) => `<li><a class="menu-item" data-item="${id}">${title}</a></li>`).join('')}
    </ul>
	`
}
