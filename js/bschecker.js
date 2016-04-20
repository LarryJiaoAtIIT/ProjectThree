function loginValidator(){
	var x = document.forms["checkForm"]["user"].value;
	if(x == null || x ==""){
		alert("Please put in your Username");
	}
}