import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    console.log("Greetings from hello_controller.js, sis!")
  }
  greet() {
    console.log(`Hello, ${this.name}!`)
  }

  get name() {
    return this.targets.find("name").value
  }
}
