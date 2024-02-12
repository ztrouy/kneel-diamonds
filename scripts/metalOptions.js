export const metalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let metalHTML = "<h2>Metals</h2>"

    for (const metal of metals) {
        metalHTML += `<div><input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}</div>`
    }

    return metalHTML
}