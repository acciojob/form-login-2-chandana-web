const c=document.querySelector(".info");
     c.submit(){
		var fname=document.getElementById("fname").value;
		var lname=document.getElementById("lname").value;
		var phone=document.getElementById("phone").value;
		var email=document.getElementById("email").value;
		alert('First Name: ' + fname + '\nLast Name: ' + lname + '\nPhone Number: ' + phone + '\nEmail ID: ' + email);
	});