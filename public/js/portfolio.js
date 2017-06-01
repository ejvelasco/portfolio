"use-strict";

const angular = require("angular");
const $ = require("jquery");
require("jquery-easing");
//angular app and controllers
const portfolioApp = angular.module("portfolioApp", [])
require("./ngProjectsGallery")($, portfolioApp);
require("./ngSendEmail")($, portfolioApp);

require("./about")($);
require("./home")($);
require("./menu")($);
require("./message")($);
