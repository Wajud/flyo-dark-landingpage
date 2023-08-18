const errorMessage = document.querySelector("p.email-error")
const submitBtn = document.getElementById("submit");
const email = document.querySelector("input[name=email]");
const emailRegEx = /^([a-z0-9_])+@([a-z0-9])+\.([a-z])+(\.[a-z]+)*$/;



submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let emailAddress = email.value;
    if(emailRegEx.test(emailAddress)){
       errorMessage.classList.add("hide");
       errorMessage.classList.remove("show");
       console.log(`${emailAddress} is a valid Email`)
       email.value=""
    }

    else{
 
        errorMessage.classList.add("show");
        errorMessage.classList.remove("hide");
        console.log(`${emailAddress} is an invalid Email`)
    
        setTimeout(()=>{
            errorMessage.classList.add("hide");
            errorMessage.classList.remove("show");
        }, 2000)}

        email.value=""
   
})