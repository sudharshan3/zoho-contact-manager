import { createServer, Response } from "miragejs"
import {data} from "./data"
import listdata from "./list.json"

if(!localStorage.getItem("contacts") ){
  let contactsset = localStorage.setItem('contacts', JSON.stringify(data));
}

createServer({
  routes() {
    this.namespace = "api"

    // Responding to a POST request
    this.post("/contacts/add", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      let contacts =   JSON.parse(localStorage.getItem("contacts") || "[]");
      console.log(contacts)
      contacts.push(attrs)
      localStorage.setItem('contacts', JSON.stringify(contacts));
      console.log(contacts,'server.........')
      return { contact: attrs }
    })

    // Using the `timing` option to slow down the response
    this.get(
      "/contacts/list",
      () => {
        let contacts =   JSON.parse(localStorage.getItem("contacts") || "[]");
      
        console.log(contacts,'server........')
        return {

          contacts
          
        }
      },
      { timing: 500 }
    )

    // Using the `Response` class to return a 500
    this.delete("/movies/1", () => {
      let headers = {}
      let data = { errors: ["Server did not respond"] }

      return new Response(500, headers, data)
    })
  },
})
