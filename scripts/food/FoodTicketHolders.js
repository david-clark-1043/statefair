const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("ticketPurchased", event => {
    if(event.detail.name === "food"){
        contentTarget.innerHTML += '<div class="person eater"></div>'
    }
})
