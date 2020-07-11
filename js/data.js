import { Menu } from './components/menu.template.js';
import { Content } from './components/content.template.js';

const getData = async () => {
    const res = await fetch('./data.json')
    return await res.json()
}

const drawMenu = (pages) => {
    const menuWrapper = document.querySelector('#navigation')
    menuWrapper.insertAdjacentHTML('beforeend', Menu(pages))
}

const drawContent = (content) => {
    const contentWrapper = document.querySelector('#content')
    contentWrapper.innerHTML = Content(content)
}

const setMenuHandler = (pages) => {
    document.addEventListener('click', ({ target }) =>{
        if (target.classList.contains('menu-item')) {
            const id = target.getAttribute('data-item')
            const page = pages.find(p => p.id === id)

            drawContent(page)
        }
    })
}

(async () => {
    const data = await getData()

    drawMenu(data.pages)

    setMenuHandler(data.pages)

    drawContent(data.pages[0])
})()


document.addEventListener('click', (e) =>{
    const menuButton = document.querySelector('#menuButton')
    const main = document.querySelector('#content')
    const sidenav = document.querySelector('#navigation')

    if (menuButton === e.target)
    {
        if (main.classList.contains('showMenu'))
        {
            main.classList.remove('showMenu')
            sidenav.classList.remove('showMenu')
        }
        else
        {
            main.classList.add('showMenu')
            sidenav.classList.add('showMenu')

        }
    }


})
