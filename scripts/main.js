// Import and invoke the ticket booth component function

import { TicketBooth } from "./TicketBooth.js";
import { getTicketCount } from "./AddTickets.js";

const eventHub = document.querySelector("#state-fair")

//eventHub.addEventListener("ticketPurchased", event => getTicketCount())

TicketBooth()
getTicketCount()