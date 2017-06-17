var axios = require("axios");

//Include React
var React = require("react");

//Here we include all of the sub-components
var Form = require("./children/form");
var Results = require("./children/results");
var Saved = require("./children/saved");

//Helper Function
var helpers = require("./utils/helpers.js");

//This is the main component.
var main = React.createClass({

    //Here we set a generic state associated with the number of clicks
    getInitialState: function(){
            return{
                   topic: "",
                   startYear: "",
                   endYear: "",
                   results: [],
                   savedArticles: []
            }
    },
})