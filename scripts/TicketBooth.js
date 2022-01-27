import { FoodTicketHolders } from "./food/FoodTicketHolders.js";
import { FullPackageTicketHolders } from "./fullPackage/FullPackageTicketHolders.js";
import { GamesTicketHolders } from "./games/GamesTicketHolders.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";
import { addTicket, getTicketCount } from "./AddTickets.js";

const buttonTarget = document.querySelector(".entry")
const countTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")
const rideEvent = new CustomEvent("rideTicketPurchased")
const foodEvent = new CustomEvent("foodTicketPurchased")
const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
const gamesEvent = new CustomEvent("gamesTicketPurchased")
const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")

eventHub.addEventListener("click", event => {
    if(event.target.id === "rideTicket") {
        eventHub.dispatchEvent(rideEvent)
        addTicket()
    } else if (event.target.id === "foodTicket") {
        eventHub.dispatchEvent(foodEvent)
        addTicket()
    } else if (event.target.id === "gamesTicket") {
        eventHub.dispatchEvent(gamesEvent)
        addTicket()
    } else if (event.target.id === "sideshowTicket") {
        eventHub.dispatchEvent(sideshowEvent)
        addTicket()
    } else if (event.target.id === "fullPackageTicket") {
        eventHub.dispatchEvent(fullPackageEvent)
        addTicket()
    }
})

export const TicketBooth = () => {
    countTarget.innerHTML = `Total tickets purchased: ${getTicketCount()}`
    buttonTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gamesTicket">Games Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
            
        </div>
    `
}

RideTicketHolders()
FoodTicketHolders()
GamesTicketHolders()
SideshowTicketHolders()
FullPackageTicketHolders()
