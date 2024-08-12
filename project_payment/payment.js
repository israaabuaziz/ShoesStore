function purchased(){
   var cardnumber=document.getElementById("cardno").value;
   var email=document.getElementById("email").value;
   var securitycode=document.getElementById("security").value;
   var monthno=document.getElementById("month").value;
   var yearno=document.getElementById("year").value;
   var nameofholder=document.getElementById("name").value;
   if(validateinputs(cardnumber,email,securitycode,monthno,yearno,nameofholder)){
    if(validatecardno(cardnumber)&&validateemail(email)&&validatesecurity(securitycode)&&validatemonthyear(monthno,yearno)){
        alert("THANK YOU FOR PURCHASING OUR PRODUCTS DEAR CUSTOMER")
        document.getElementById("cardno").value="",document.getElementById("email").value="",document.getElementById("security").value="",document.getElementById("month").value="default",document.getElementById("year").value="default", document.getElementById("name").value="";
    }
    else{
        alert("PLEASE ENTER CORRECT INFORMATION");
    }
   }
   else{
    alert("PLEASE DO NOT LEAVE EMPTY FIELDS");
   }
   
  
  

  
    

}
function showcart(){
    var cartapperance=document.getElementById("carticon");
    var cart=document.getElementById("cart");
    cart.classList.toggle('show-cart'); 
}







var cardnumber=document.getElementById("cardno").value;
var email=document.getElementById("email").value;
var securitycode=document.getElementById("security").value;
function validatecardno(cardnumber){
    var cardno =/^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test((+cardnumber));
    if(cardno){
    return true;
    }
    else{
        alert("Not a valid visa card number")
        return false;
    }
}
function validateemail(email){
    var valid=true;
    
    if(email=='"'){
        alert("Email is empty");
        valid=false;
    }
    else {
        if(email.indexOf("@")==-1||email.indexOf(".")==-1){
            alert("pleases enter a valid E-mail");
            valid=false;
        }
    }
    return valid;
    
}
function validatesecurity(securitycode){
    var ItIsTrue=/^\d{4}$/.test((+securitycode))
    if(ItIsTrue){
        return true;
    }
    else{
        return false;
    }
}
function validateinputs(cardnumber,email,securitycode,monthno,yearno,nameofholder){
    var filled=true;
    if(cardnumber==null||cardnumber==""||email==""||email==null||securitycode==""||securitycode==null||monthno=="default"||yearno=="default"||nameofholder==null||nameofholder==""){
        alert("PLEASE DO NOT LEAVE ANY FIELD EMPTY")
        filled=false;
    }
    else{
        filled=true
    }
    return filled;
}
function validatemonthyear(monthno,yearno){
    if((+monthno)<=7 && (+yearno)<=2022){
        alert("NOT A VALID EXPIRATION DATE")
        return false;
    }
    else{
        return true;
    }
}
