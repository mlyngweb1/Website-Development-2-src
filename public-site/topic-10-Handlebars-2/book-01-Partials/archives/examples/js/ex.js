Handlebars.registerPartial("headersection", '<header><h1>BubbleUnder.com</h1></header>' +
'<nav><ul><li><a href="index.html">Home</a></li>' +
'<li><a href="about.html">About Us</a></li><li><a href="contact.html">Contact Us</a></li></ul></nav>');

var template = $('#handlebars-demo').html();

var html = Handlebars.compile(template);

$(document.body).append(html);