export const ordersList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=size&_expand=style")
    const orders = await response.json()

    const ordersArray = orders.map(order => {
        const orderPrice = order.metal.price + order.size.price + order.style.price

        return `<div>Order #${order.id} cost $${orderPrice.toFixed(2)}</div>`
    })

    const ordersHTML = ordersArray.join("")

    return ordersHTML
}