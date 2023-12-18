$(document).ready(function(){
	
	if(localStorage.getItem("userName")=="null"){
		window.location.replace("Incorrect.html")}
	
	$(document).on("click","#customerdetails",function(){
		showModelPopUp();
	})
	
});

const showModelPopUp=function(){
	$("#usersDropDown").hide();
	$("#customerModel").modal();
	$(".close").hide();
}