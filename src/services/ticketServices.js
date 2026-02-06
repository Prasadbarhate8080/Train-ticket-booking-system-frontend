import { config } from "./config";

class TicketServices {
    async bookTicket(trainNumber, passengerData, travelDate) {
        try {
            const response = await fetch(`${config.API_BASE_URL}/api/v1/ticket/bookticket`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    trainNumber,  
                    passengerData,
                    travelDate     

                })
            });
            
            if (!response.ok) {
                throw new Error(`Ticket booking failed: ${response.statusText}`);
            }
    
            return await response.json();
      
        } catch (error) {
            console.log("tick   etService :: bookTicket :: error", error);
            throw error;
        }
    }
     
    async getTicket(id) {
        try {

            const response = await fetch(`${config.API_BASE_URL}/api/v1/ticket/getticket?id=${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    
                },
                credentials: "include"
            });
    
            if (!response.ok) {
                throw new Error(`Ticket fetching failed: ${response.statusText}`);
            }
    
            return await response.json();
            
        } catch (error) {
            console.log("ticketService :: getTicket :: error", error);
            throw error;
        }
    }
    


    async getTickets() {
        try {
            const response = await fetch(`${config.API_BASE_URL}/api/v1/ticket/gettickets`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", 
            });
            console.log(response);
            
            if (!response.ok) {
                throw new Error(`Fetching tickets failed: ${response.statusText}`);
            }

            return await response.json();

        } catch (error) {
            console.log("ticketService :: getTickets :: error", error);
            throw error;
        }
    }
}

const ticketService = new TicketServices();

export {ticketService}