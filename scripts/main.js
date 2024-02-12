import { metalOptions } from './metalOptions.js'
import { sizeOptions } from './sizeOptions.js'
import { styleOptions } from './styleOptions.js'

const render = async () => {
    const metalOptionsHTML = await metalOptions()
    const sizeOptionsHTML = await sizeOptions()
    const styleOptionsHTML = await styleOptions()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `

    const mainHTML = document.querySelector("#container")
    mainHTML.innerHTML = composedHTML
}

render()