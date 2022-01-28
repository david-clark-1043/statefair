import "./food/FoodTicketHolders.js";
import "./fullPackage/FullPackageTicketHolders.js";
import "./games/GamesTicketHolders.js";
import "./rides/RideTicketHolders.js";
import "./sideshows/SideshowTicketHolders.js";
import { getTicketCount } from "./AddTickets.js";

const buttonTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

const rideEvent = new CustomEvent("ticketPurchased", {
    detail: {
      name: 'ride'
    }
  })
const foodEvent = new CustomEvent("ticketPurchased", {
    detail: {
      name: 'food'
    }
  })
const sideshowEvent = new CustomEvent("ticketPurchased", {
    detail: {
      name: 'sideshow'
    }
  })
const gamesEvent = new CustomEvent("ticketPurchased", {
    detail: {
      name: 'games'
    }
  })
const fullPackageEvent = new CustomEvent("ticketPurchased", {
    detail: {
      name: 'fullPackage'
    }
  })

eventHub.addEventListener("click", event => {
    if(event.target.id === "rideTicket") {
        eventHub.dispatchEvent(rideEvent)
        //addTicket()
    } else if (event.target.id === "foodTicket") {
        eventHub.dispatchEvent(foodEvent)
        //addTicket()
    } else if (event.target.id === "gamesTicket") {
        eventHub.dispatchEvent(gamesEvent)
        //addTicket()
    } else if (event.target.id === "sideshowTicket") {
        eventHub.dispatchEvent(sideshowEvent)
        //addTicket()
    } else if (event.target.id === "fullPackageTicket") {
        eventHub.dispatchEvent(fullPackageEvent)
        //addTicket()
    }
})

export const TicketBooth = () => {
    //countTarget.innerHTML = '<div class="ticketCount">Total tickets purchased: 0</div>'
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

// RideTicketHolders()
// FoodTicketHolders()
// GamesTicketHolders()
// SideshowTicketHolders()
// FullPackageTicketHolders()
