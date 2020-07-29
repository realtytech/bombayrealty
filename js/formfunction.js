function validate()
	{
		
		if(document.frm.fname.value=="")
		{
			alert("Please specify Your First Name.")
			document.frm.fname.focus()
			return false;
		}
		
		if(document.frm.email.value=="")
				{
					alert("Please mention your Email Id");
					document.frm.email.focus();
					return false;
				}
				else
				{		
				var x = document.forms["frm"]["email"].value;
				var atpos = x.indexOf("@");
				var dotpos = x.lastIndexOf(".");
				if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
					alert("Not a valid e-mail address");
					document.frm.email.focus();
					return false;
				}
			}
			

		if(document.frm.mobileno.value=="")
				{
					alert("Please mention your Mobile number.");
					document.frm.mobileno.focus();
					return false;
				}
				else
				{
					var str =/^\d{10}$/;
					var eflag = document.frm.mobileno.value.match(str);
					if(eflag!=document.frm.mobileno.value)
					{
						alert("Please enter a valid 10 digit Mobile number.")
						document.frm.mobileno.focus();
						document.frm.mobileno.select();
						return false;
					}
				}
				
				
		
		if(document.frm.city.value=="")
		{
			alert("Please specify the City.")
			document.frm.city.focus()
			return false;
		}
		
		if (grecaptcha.getResponse().length == 0) {
			alert('Please select the reCAPTCHA checkbox');
			return false;
		}

				
		document.frm.action = "thankyou.php";
		document.frm.submit();
	
	}
	
	
function validatebooksite()
	{
		
		if(document.frmbook.fname.value=="")
		{
			alert("Please specify Your First Name.")
			document.frmbook.fname.focus()
			return false;
		}
		
		if(document.frmbook.email.value=="")
				{
					alert("Please mention your Email Id");
					document.frmbook.email.focus();
					return false;
				}
				else
				{		
				var x = document.forms["frmbook"]["email"].value;
				var atpos = x.indexOf("@");
				var dotpos = x.lastIndexOf(".");
				if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
					alert("Not a valid e-mail address");
					document.frmbook.email.focus();
					return false;
				}
			}
			

		if(document.frmbook.mobileno.value=="")
				{
					alert("Please mention your Mobile number.");
					document.frmbook.mobileno.focus();
					return false;
				}
				else
				{
					var str =/^\d{10}$/;
					var eflag = document.frmbook.mobileno.value.match(str);
					if(eflag!=document.frmbook.mobileno.value)
					{
						alert("Please enter a valid 10 digit Mobile number.")
						document.frmbook.mobileno.focus();
						document.frmbook.mobileno.select();
						return false;
					}
				}
				
				
		
		if(document.frmbook.city.value=="")
		{
			alert("Please specify the City.")
			document.frmbook.city.focus()
			return false;
		}
		
		if (grecaptcha.getResponse().length == 0) {
			alert('Please select the reCAPTCHA checkbox');
			return false;
		}

				
		document.frmbook.action = "thank-you.php";
		document.frmbook.submit();
	
	}
	
function validaterecfrm()
	{
		
		if(document.recfrm.name.value=="")
		{
			alert("Please specify Your Name.")
			document.recfrm.name.focus()
			return false;
		}
		
		if(document.recfrm.email.value=="")
				{
					alert("Please mention your Email Id");
					document.recfrm.email.focus();
					return false;
				}
				else
				{		
				var x = document.forms["recfrm"]["email"].value;
				var atpos = x.indexOf("@");
				var dotpos = x.lastIndexOf(".");
				if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
					alert("Not a valid e-mail address");
					document.recfrm.email.focus();
					return false;
				}
			}
		
		
		if(document.recfrm.friendemail.value=="")
				{
					alert("Please mention your Friend's Email Id");
					document.recfrm.friendemail.focus();
					return false;
				}
				else
				{		
				var x = document.forms["recfrm"]["friendemail"].value;
				var atpos = x.indexOf("@");
				var dotpos = x.lastIndexOf(".");
				if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
					alert("Not a valid e-mail address");
					document.recfrm.friendemail.focus();
					return false;
				}
			}
			
		
		if (grecaptcha.getResponse().length == 0) {
			alert('Please select the reCAPTCHA checkbox');
			return false;
		}

				
		document.recfrm.action = "recommend.php";
		document.recfrm.submit();
	
	}
	
	