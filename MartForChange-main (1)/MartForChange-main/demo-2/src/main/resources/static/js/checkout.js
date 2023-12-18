$(document).ready(function(){
	if(localStorage.getItem("userName")=="null"){
		window.location.replace("Incorrect.html")}
var globalItemsData;
$("#loader").css("display","none");
$("#cus_loader").css("display","none");
$("#del_loader").css("display","none");
$("#total").css("display","none");
//$("#avl_btn").hide();
//$("#card_person").hide();
//$("#btn").click(function(){
$("#btn").attr("disabled", true);
$("#loader").css("display","inline-table");
$("#cus_loader").css("display","block");
$.get("json/json_data.json",function(data,status){
console.log(data);
var data=data;
globalItemsData=data;
console.log(data);
for(var i=0;i<data.length-1;i++){
console.log(data[i]);
$("#tdata").append("<tr>"+
"<td>"+data[i].itemName+"</td>"+
"<td>"+data[i].quantity+"</td>"+
"<td>"+data[i].itemCost+"</td>"+
+"</tr>")
 
}
$("#total").css("display","inline-block");
$("#total").append(data[i].total)
$("#avl_btn").show();
$("#card_person").show();
});
 
//});
//var rowButtons="<button type='button'class='btn btn-primary' did= id='submitBtn'>LINK</button>"
 
$("#avl_btn").click(function(){
$("#avl_btn").attr("disabled", true);
$("#del_loader").css("display","inline-table");
$.ajax(
{
type: "GET", url: "/DeliveryPersonsList",
success: function(data)
{
console.log(data);
var data=data;
 
for(i=0;i<data.length;i++){
console.log(data[i]);
$("#del_data").append("<tr>"+
// "<td>"+data[i].user_id+"</td>"+
"<td>"+data[i].first_name+"</td>"+
"<td>"+data[i].last_name+"</td>"+
"<td>"+data[i].account_status+"</td>"+
"<td>"+data[i].phone_number+"</td>"+
"<td>"+data[i].role+"</td>"+
'<td><button type="button" class="btn btn-primary submitBtn" did='+data[i].user_id+'>LINK</button></td>' +
"</tr>")
}
 
}
});
 
/* $.get("json/delivery_data.json",function(data,status){
console.log(data);
var data=data;
for(i=0;i<data.length;i++){
console.log(data[i]);
$("#del_data").append("<tr>"+
// "<td>"+data[i].user_id+"</td>"+
"<td>"+data[i].first_name+"</td>"+
"<td>"+data[i].last_name+"</td>"+
"<td>"+data[i].account_status+"</td>"+
"<td>"+data[i].phone_number+"</td>"+
"<td>"+data[i].role+"</td>"+
'<td><button type="button" class="btn btn-primary submitBtn" did='+data[i].user_id+'>LINK</button></td>' +
"</tr>")
}
});*/
});
 
$(document).on('click', '.submitBtn', function(e) {
// {alert('Document On Click');
	let deliveryPerId=e.target.getAttribute('did');
	var $btn = $(e.currentTarget);
 
	//console.log(e.target.getAttribute('did'));
	let linkJson={};
	linkJson["customerId"]=1;
	linkJson["deliveryPersonId"]=deliveryPerId;
	linkJson["orderStatus"]="Initialised";
	linkJson["items"]=globalItemsData;
	console.log(linkJson);
	  showLoadIndicatorWithMessage('Linking...');
	$.ajax({
		type: "POST",
		url: "/deliverylink",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(linkJson),
		 success: function(data) {
			  hideLoadIndicator();
			 $btn.text("Linked");
			 $btn.prop("disabled", true);
			 
		}
	})
	 hideLoadIndicator();

});
});

