const eventHub = document.querySelector("#state-fair")

// holder of ticket count
let ticketCount = 0
// function that updates ticket count and sends new event
export const addTicket = () => {
    ticketCount++
    eventHub.dispatchEvent(new CustomEvent("ticketAdded"))
}

export const getTicketCount = () => {
    return ticketCount
}