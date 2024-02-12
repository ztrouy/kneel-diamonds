export const sizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()
    
    let optionsHTML = "<h2>Sizes</h2>"
    for (const size of sizes) {
        optionsHTML += `<div><input type="radio" name="size" value="${size.id}" /> ${size.carets}</div>`
    }

    return optionsHTML
}