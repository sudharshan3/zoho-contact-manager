import { createServer, Response } from "miragejs"
import fulldata from "./data.json"
import listdata from "./list.json"
createServer({
  routes() {
    this.namespace = "api"

    // Responding to a POST request
    this.post("/contacts/add", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      attrs.contact_id = Math.floor(Math.random() * 100)

      return { contacts: attrs }
    })

    // Using the `timing` option to slow down the response
    this.get(
      "/contacts/list",
      () => {
        return {
          contacts: [
            fulldata
          ],
        }
      },
      { timing: 1000 }
    )

    // Using the `Response` class to return a 500
    this.delete("/movies/1", () => {
      let headers = {}
      let data = { errors: ["Server did not respond"] }

      return new Response(500, headers, data)
    })
  },
})
