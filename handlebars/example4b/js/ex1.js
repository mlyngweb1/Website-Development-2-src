var rawP = "<h1>BubbleUnder.com</h1>";


var context = {
  "language": "Handlebars",
  "adjective": "awesome"
}

//Retrieve the template data from the HTML .
var template = $('#handlebars-demo').html();
var rawP = $('#mainpartial').html();
//Compile the template data into a function
var templateScript = Handlebars.compile(template);

Handlebars.registerPartial("headersection", "<h1>BubbleUnder.com</h1><p>f</p>");
var html = templateScript(context);
//html = 'My name is Ritesh Kumar . I am a developer.'

$(document.body).append(html);