showLoadIndicatorWithMessage = function (message) {
		$.blockUI({
			message: '<span>' + message + '</span>',
			css: {
				border: 'none',
				padding: '15px',
				backgroundColor: '#000',
				'-webkit-border-radius': '10px',
				'-moz-border-radius': '10px',
				opacity: .5,
				color: '#fff'
			}
		});
	};
	
hideLoadIndicator = function () {
		$.unblockUI();
};

$(document).on("click","#logout",function(e){
	localStorage.setItem("userName",null);
	localStorage.setItem("password",null);
	 window.location.replace("login.html");
});
