/*
  This script is included in index.html via:
  {% asset_tag main.js %}
*/

const logMessage = "ES6 & Stimulus with Jekyll on Webpack";
console.log(logMessage)

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
