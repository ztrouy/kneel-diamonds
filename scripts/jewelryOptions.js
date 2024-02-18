import { setJewelryId } from "./transientState.js"

export const jewelryOptions = async () => {
    const response = fetch("http://localhost:8088/jewelries")
    const jewelries = (await response).json()

    let jewelryHTML = "<div>"

    const inputStringArray = jewelries.map(jewelry => `<input type="radio" name="jewelry" value="${jewelry.id}" />${jewelry.jewelry}`)

    jewelryHTML += inputStringArray.join("")

    jewelryHTML += "</div>"

    return jewelryHTML
}

const handleJewelryChoice = (changeEvent) => {
    const eventTarget = changeEvent.target
    const eventTargetValue = parseInt(eventTarget.value)

    if (eventTarget.name === "jewelry") {
        setJewelryId(eventTargetValue)
    }
}

document.addEventListener("change", handleJewelryChoice)