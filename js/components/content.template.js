export const Content = ({ title, video, html }) => {

	return `
		<h1 class="header">${title}</h1>
		<div class="contentInner">
			${ video
				? `<video controls autoplay loop muted id="video"	src="${video}"></video>`
				: ''
			}
    	${html}
    </div>
	`
}
