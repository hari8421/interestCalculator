function test(){
	console.log("test");
}
function loadRegisterPage(){
	window.location.href="register.html";
}

function loadloginPage(){
	window.location.href="login.html";
}
function onLoadPage(){
	console.log("onLoad");
	document.getElementById("submit").disabled =true;
}
function login(){

let username=document.getElementById("userName").value;
let pwd=document.getElementById("pass").value;
alert("Login successful");
	
}
function checkMandatory(){
	
let firstName=document.getElementById("firstName").value;
let lastName=document.getElementById("lastName").value;
let dob=document.getElementById("dob").value;
let pwd=document.getElementById("password").value;
let cpwd=document.getElementById("cpass").value;
let address=document.getElementById("add").value;
let gender=document.getElementById("gender").value;
let confirm="";
if(document.getElementById("confirm").checked){

confirm=document.getElementById("confirm").value;	
	
}
if(firstName!=""&&lastName!=""&&dob!=""&&pwd!=""&&cpwd!=""&&address!=""){
	
	document.getElementById("submit").disabled =false;
}else{
	console.log("Enter mandatory values");
}
}
function register(){
console.log("reg");
let firstName=document.getElementById("firstName").value;
let lastName=document.getElementById("lastName").value;
let dob=document.getElementById("dob").value;
let pwd=document.getElementById("password").value;
let cpwd=document.getElementById("cpass").value;
let address=document.getElementById("add").value;
let gender=document.getElementById("gender").value;
let confirm="";
if(document.getElementById("confirm").checked){

confirm=document.getElementById("confirm").value;	
	
}
if(confirm==""){
	alert("Sign the declaration");
}else{
if(pwd!=cpwd){
	alert("Password does not match");
}else{

if(firstName!=""&&lastName!=""&&dob!=""&&pwd!=""&&cpwd!=""&&address!=""){
	if(document.getElementById("email").validity.valid){
		alert("Registration successful");
		window.location.href="landing.html";
	}else{
		alert("Enter valid Email and Mobile");
	}
	
}else
alert("Enter all fields");
}
}
}

function cancel(){

document.getElementById("userName").value="";
document.getElementById("pass").value="";
}
