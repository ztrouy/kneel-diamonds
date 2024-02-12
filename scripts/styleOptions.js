export const styleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()


    let optionsHTML = "<h2>Styles</h2>"
    for (const style of styles) {
        optionsHTML += `<div><input type="radio" name="style" value="${style.id}" /> ${style.style}</div>`
    }

    return optionsHTML
}