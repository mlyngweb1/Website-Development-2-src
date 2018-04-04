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


			theid = $('#id').val();
			fname = $('#firstname').val();
			lname = $('#lastname').val();
			thecounty = $('#county').val();
			theemail = $('#email').val();


			            if ((theid != "")&&(fname != "")  && (lname != "") && (thecounty != "")&&(theemail != ""))
			            {

 newemp= {
	 id:theid,
	 firstname:fname,
	 lastname:lname,
	 county:thecounty,
	 email:theemail
 }

			console.log(newemp);
			department.employee.push(newemp);
					console.log(department);
	  	  var theCompiledHtml = template(department);
			$("#content-placeholder").html(theCompiledHtml);

$('#modalForm').modal('hide');
$('.modal-backdrop').remove();
$('#id').val("");
$('#firstname').val("");
$('#lastname').val("");
$('#county').val("");
$('#email').val("");

}
else alert("You must complete all the fields");
	});
});












