$(document).ready(function() {
var source   = $("#some-template").html();
  var template = Handlebars.compile(source);

var department = {
	    "dept":"Sales",
"employee":[
    {
        'id':1,
		'firstname': "Fred",
	    'lastname': "Bloggs",
	    'county':'Kilkenny',
	    'email':'fbloggs@gmail.com'
    },
        {
            'id':2,
			'firstname': "Katy",
		    'lastname': "Malone",
		    'county':'Waterford',
		    'email':'kmalone@gmail.com'
	    },
        {
            'id':3,
			'firstname': "Sam",
		    'lastname': "Dunne",
		    'county':'Waterford',
		    'email':'samdunne@gmail.com'
	    }
  ]
};

	  	  var theCompiledHtml = template(department);

	    $("#content-placeholder").html(theCompiledHtml);

$('#thesubmit').click(function() {
			fname = $('#firstname').val();

			console.log(fname);
	});
	  });












