let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1 ;
let submit = 4 ;

 
function validateForm(){
    
    if(username.value == ""){
        document.getElementById("userError").innerHTML = "user name is empty";
        flag = 0 ;
    }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "enter valid name";
        flag = 0;
        submit=0;

    }else{
        document.getElementById("userError").innerHTML = "";
        flag = 1 ;
    }

    if(password.value == ""){
        document.getElementById("passwordError").innerHTML ="password is empty";
        flag = 0 ;
    }else{
        document.getElementById("passwordError").innerHTML = "";
        flag = 1
     } 
    if(submit){
        return true;
    }else{
        return false ;
    }

     if (flag){
          return true;
     }else{
        return false ;
     }
}
