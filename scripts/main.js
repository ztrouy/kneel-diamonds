import { metalOptions } from './metalOptions.js'
import { styleOptions } from './styleOptions.js'

const render = async () => {
    const metalOptionsHTML = await metalOptions()
    const styleOptionsHTML = await styleOptions()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
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