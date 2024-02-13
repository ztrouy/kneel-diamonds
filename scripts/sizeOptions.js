import { setSizeId } from "./transientState.js"

export const sizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()
    
    let optionsHTML = `<h2>Sizes</h2><div class="content">`

    const divStringArray = sizes.map(size => {return `<div><input type="radio" name="size" value="${size.id}" /> ${size.carets}</div>`})

    optionsHTML += `${divStringArray.join("")}</div>`

    return optionsHTML
}

const handleSizeChoice = (changeEvent) => {
    const eventTarget = changeEvent.target
    const eventTargetValue = parseInt(eventTarget.value)

    if (eventTarget.name === "size") {
        setSizeId(eventTargetValue)
    }
}

document.addEventListener("change", handleSizeChoice)