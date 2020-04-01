import x from './x'
import png from './assets/1.png'

const div = document.getElementById('app')

// div.innerHTML = `
//     <img src="${png}">
// `

const button = document.createElement('button');

button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default;
        fn();
    }, () => {
    })
}

div.appendChild(button)