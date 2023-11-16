const c=document.querySelector(".info");
     c.addEventListener("submit", function(e){
		e.preventDefault();
		var fname=document.getElementById("fname").value;
		var lname=document.getElementById("lname").value;
		var phone=document.getElementById("phone").value;
		var email=document.getElementById("email").value;
		window.alert('First Name: ' + fname + '\nLast Name: ' + lname + '\nPhone Number: ' + phone + '\nEmail ID: ' + email);
	});