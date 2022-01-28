const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("ticketPurchased", event => {
    if(event.detail.name === "ride") {
        contentTarget.innerHTML += '<div class="person rider"></div>'
    }
})
