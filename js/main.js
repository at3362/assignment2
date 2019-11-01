$(document).ready(function(){
	$("#addRec").click(function(){

	if (validateText() && validateYear()){
		var fullName = $("#fullName").val();
		var major = $("#major").val();
		var startYearInt = parseInt($("#startYear").val());

		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes();
	    
	    $("#records").append(
	    	"<p>" +
	    	time + " - " +
	    	fullName + ", " +
	    	major + ", " +
	    	startYearInt + "</p>"
	    	);
	    formClear();
	}
  	
  });
});


function formClear()
{
	$("#fullName").val("");
  	$("#major").val("");
  	$("#startYear").val("");
}

function validateText()
{
	var transcribed = true;
	var notification = "";
	
	var name = document.myform.fullName.value;
	var major = document.myform.major.value;
	var year = document.myform.startYear.value;

	if (name.length == 0)
	{
		transcribed = false;
		notification += "Please enter full name. \n"
	}

	if (major.length == 0)
	{
		transcribed = false;
		notification += "Please enter major. \n"
	}

	if (year.length == 0)
	{
		transcribed = false;
		notification += "Please enter starting year. \n"
	}
					
	if (!transcribed)
	{
		alert(notification);
	}
			
	return transcribed;
}

function validateYear()
{
	var year = document.myform.startYear.value;

	var notEmpty = false
	if (year < 2000)
	{
		alert("Invalid year.");
	}
	else
		notEmpty = true;

	return notEmpty;
}
