import { setMetalId } from "./transientState.js"

export const metalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let optionsHTML = `<h2>Metals</h2><div class="content">`

    const divStringArray = metals.map(metal => {return `<div><input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}</div>`})

    optionsHTML += `${divStringArray.join("")}</div>`

    return optionsHTML
}

const handleMetalChoice = (changeEvent) => {
    const eventTarget = changeEvent.target
    const eventTargetValue = parseInt(eventTarget.value)

    if (eventTarget.name === "metal") {
        setMetalId(eventTargetValue)
    }
}

document.addEventListener("change", handleMetalChoice)