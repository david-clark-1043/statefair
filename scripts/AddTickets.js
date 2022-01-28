const eventHub = document.querySelector("#state-fair")
const countTarget = document.querySelector(".customers")

// holder of ticket count
let ticketCount = 0

// function that updates ticket count and sends new event
// export const addTicket = () => {
//     ticketCount++
//     eventHub.dispatchEvent(new CustomEvent("ticketAdded"))
// }

eventHub.addEventListener("ticketPurchased", event => {
    ticketCount++
    getTicketCount()
})


export const getTicketCount = () => {
    countTarget.innerHTML = `Total tickets purchased: ${ticketCount}`
}