import { placeOrder } from "./transientState.js"

export const orderButton = () => {
    return `<button id="placeOrder">Place Order</button>`
}

document.addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target

    if (clickTarget.id === "placeOrder") {
        placeOrder()
    }
})