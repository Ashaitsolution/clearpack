function ValidateSubscribeNow()
{debugger;var Name,Mobile,EmailId,Country,Company,Industry;Name=document.getElementById("ctl00_FooterDetails1_txtSubscribeName").value;Mobile=document.getElementById("ctl00_FooterDetails1_txtSubscribeMobile").value;Country=document.getElementById("ctl00_FooterDetails1_txtSubscribeCounty").value;EmailId=document.getElementById("ctl00_FooterDetails1_txtSubscribeEmail").value;emailExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;numberexp=/^\d*$/;Company=document.getElementById("ctl00_FooterDetails1_txtSubscribeComapny").value;Industry=document.getElementById("ctl00_FooterDetails1_txtSubscribeIndustry").value;if(Name==''&&Country==''&&EmailId==''&&Company==''&&Industry=='')
{alert("Enter All Fields");return false;}
if(Name==''){alert("Please Enter Name");return false;}
if(EmailId==''){alert("Please Enter Email Id");return false;}
if(Country=='')
{alert("Please Enter Country");return false;}
if(Company=='')
{alert("Please Enter Company");return false;}
if(Industry=='')
{alert("Please Enter Industry");return false;}
if(Mobile!='')
{if(!Mobile.match(numberexp))
{alert("Mobile Number accepts digits only");return false;}}
if(EmailId!='')
{if(!EmailId.match(emailExp))
{alert("Please Enter Valid Email Id");return false;}}
if(Name.length<2||Name.length>100)
{alert("Minimum 2 and Maximum 100 Characters Required in Name");return false;}
return true;}
function ValidateFooterEnquiry()
{debugger;
var Name,Mobile,EmailId,Country,Company;Name=document.getElementById("ctl00_FooterDetails1_txtFooterContactName").value;
Mobile=document.getElementById("ctl00_FooterDetails1_txtFooterContactMobileNo").value;
Country=document.getElementById("ctl00_FooterDetails1_txtFooterContactCountry").value;
EmailId=document.getElementById("ctl00_FooterDetails1_txtFooterContactEmail").value;
emailExp=/^\S+@\S+$/;
numberexp=/^[0-9]{10}$/;
nameexp = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{2,100}$/;
Company=document.getElementById("ctl00_FooterDetails1_txtFooterContactCompany").value;
if(Name==''&&Country==''&&EmailId==''&&Company==''&&Mobile=='')
{alert("Enter All Fields");return false;}
if(Name==''){alert("Please Enter Name");return false;}
{if(!Name.match(nameexp))
{alert("Please Enter Valid Name");return false;}}
if(EmailId==''){alert("Please Enter Email Id");return false;}
if(Country=='')
{alert("Please Enter Country");return false;}
{if(!Country.match(nameexp))
{alert("Please Enter Valid Country");return false;}}
if(Company=='')
{alert("Please Enter Company");return false;}
{if(!Company.match(nameexp))
{alert("Please Enter Valid Company");return false;}}
if(Mobile=='')
{alert("Please Enter Mobile No");return false;}
if(Mobile!='')
{if(!Mobile.match(numberexp))
{alert("Mobile Number accepts digits only");return false;}}
if(EmailId!='')
{if(!EmailId.match(emailExp))
{alert("Please Enter Valid Email Id");return false;}}
if(Name.length<2||Name.length>100)
{alert("Minimum 2 and Maximum 100 Characters Required in Name");return false;}
return true;}