Handlebars.registerPartial("headersection", '<h1>BubbleUnder.com</h1>' +
'<ul><li><a href="index.html">Home</a></li>'
+'<li><a href="about.html">About Us</a></li><li><a href="contact.html">Contact Us</a></li></ul>');


var context = {
  "language": "Handlebars",
  "adjective": "awesome"
}

//Retrieve the template data from the HTML .
var template = $('#handlebars-demo').html();

//Compile the template data into a function
var templateScript = Handlebars.compile(template);

var html = templateScript(context);
//html = 'My name is Ritesh Kumar . I am a developer.'

$(document.body).append(html);