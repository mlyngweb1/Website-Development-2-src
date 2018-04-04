Handlebars.registerPartial("headersection", '<h1>BubbleUnder.com</h1>' +
'<ul><li><a href="index.html">Home</a></li>'
+'<li><a href="about.html">About Us</a></li><li><a href="contact.html">Contact Us</a></li></ul>');


//Retrieve the template data from the HTML .
var template = $('#handlebars-demo').html();

//Compile the template data into a function
var html = Handlebars.compile(template);


$(document.body).append(html);