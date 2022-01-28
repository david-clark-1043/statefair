const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("ticketPurchased", event => {
    if(event.detail.name === "sideshow"){
        contentTarget.innerHTML += '<div class="person gawker"></div>'
    }
})
