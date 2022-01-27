// Import and invoke the ticket booth component function

import { TicketBooth } from "./TicketBooth.js";

const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("ticketAdded", event => TicketBooth())

TicketBooth()