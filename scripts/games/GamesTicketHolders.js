const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("ticketPurchased", event => {
    if(event.detail.name === "games"){
        contentTarget.innerHTML += '<div class="person player"></div>'
    }
})
