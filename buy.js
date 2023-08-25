function validatePaymentForm(){
    const name = document.getElementById("full-name").value
    const email = document.getElementById("Email-address").value
    const address = document.getElementById("Address").value
    const phone = document.getElementById("Phone-Number").value
    const credit = document.getElementById("Credit-card").value
    const CVV = document.getElementById("CVV").value
    const agree = document.getElementById("agree-terms").checked
    const error = document.getElementById("errorMSG")
    let msg = ""
    if(!name)
    {
        msg = "Name must be filled!"
    }
    else if(!email)
    {
        msg = "Email address must be filled!"
    }
    else if(!email.endsWith("@gmail.com"))
    {
        msg = "Email address must ends with @gmail.com"
    }
    else if(!address)
    {   
        msg = "Address must be filled"
    }
    else if(address.length < 10)
    {
        msg = "Address must be longer than 10 characters"
    }
    else if(!phone)
    {
        msg = "Phone number must be filled"
    }
    else if(phone.length < 12 && phone.length > 12)
    {
        msg = "Phone number must be exactly 12 numbers"
    }
    else if(!credit)
    {
        msg = "credit card information must be filled"
    }
    else if(credit.length < 16)
    {
        msg = "credit card infomration must be exactly 16 digits"
    }
    else if(!CVV)
    {
        msg = "CVV must be filled"
    }
    else if(CVV.length < 3)
    {
        msg = "CVV must be 3 characters"
    }
    else if(!agree)
    {
        msg = "you must agree to all the terms"
    }

    if(msg)
    {
        error.innerHTML = msg;
        return false;
    }
    else
    {
        return true;
    }
}