function validateForm(){
    var name=document.f.name.value;
    var password0=document.f.password0.value;
    var password1=document.f.password1.value;
    var number=document.f.number.value;
    var date=document.f.date.value;
    var age=document.f.age.value;
    var dob=document.f.age.value

if(name==null || name==""){
        alert("Name camnnot be blank");
        return false;
}
if (isNaN(number) || number == "") {
alert("Please enter a valid number");
return false;
}
if (number.length !== 10) {
alert("Number should contain exactly 10 digits");
return false;
}
if(age>=18){
alert("Under Age");
return false;
}
if(password0==password1){  
return true;  
}  
else{  
alert("password must be same!");  
return false;  
}    
}