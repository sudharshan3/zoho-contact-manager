import { createServer, Response } from "miragejs"
import {data} from "./data"
import listdata from "./list.json"

if(!localStorage.getItem("contacts") ){
  let contactsset = localStorage.setItem('contacts', JSON.stringify(data));
}

createServer({
  routes() {

    this.namespace = "api"
    this.post("/contacts/add", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      let contacts =   JSON.parse(localStorage.getItem("contacts") || "[]");
      contacts.push(attrs)
      localStorage.setItem('contacts', JSON.stringify(contacts));
    
      return { contact: attrs }
    })
    this.namespace = "api"
    this.put("/contacts/update/:id", (schema, request) => {
      let id = request.params.id
      let attrs = JSON.parse(request.requestBody)
      let contactscopy =   JSON.parse(localStorage.getItem("contacts") || "[]");
      let contacts =   JSON.parse(localStorage.getItem("contacts") || "[]");
      const index = contacts.findIndex(m=>m.contact_id===id)

      contactscopy[index] = attrs
    
    
      localStorage.setItem('contacts', JSON.stringify(contactscopy));
    
      return { contact: attrs }
    })


    this.get(
      "/contacts/list",() => {
        let contacts =   JSON.parse(localStorage.getItem("contacts") || "[]");      
        return {
          contacts          
        }
      },
      { timing: 500 }
    )


    this.namespace = "api" 
    this.delete("/contacts/delete/:id", ( schema,request) => {
      let id = request.params.id
      let contacts =   JSON.parse(localStorage.getItem("contacts") || "[]");  
      contacts = contacts.filter(x => {
        return x.contact_id != id;
      })         
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return contacts
    })
  },
})
