const gamesTarget = document.querySelector(".games")
const sideshowTarget = document.querySelector(".sideshow")
const ridesTarget = document.querySelector(".rides")
const foodTarget = document.querySelector(".food")

const targetList = [ridesTarget, foodTarget, gamesTarget, sideshowTarget]

const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("ticketPurchased", event => {
    if(event.detail.name === "fullPackage"){
        for (const target of targetList) {
            target.innerHTML += '<div class="person bigSpender"></div>'
        }
    }
})
