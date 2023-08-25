function validateSellForm(){
    const name = document.getElementById("fullname").value 
    const email = document.getElementById("emailaddress").value
    const number = document.getElementById("phonenumber").value
    const car = document.getElementById("carname").value
    const mileage = document.getElementById("mileage").value
    const year = document.getElementById("year").value
    const ats = document.getElementById("agreeterms").checked
    const error = document.getElementById("errorMSG")
    let msg = ""
    if(!name)
    {
        msg = "Name must be filled!"
    }
    else if(!email)
    {
        msg = "Email address must be filled!"
    }else if(!email.endsWith("@gmail.com"))
    {
        msg = "Email Address must ends with @gmail.com"
    }
    else if(!number)
    {
        msg = "Phone Number must be filled!"
    }
    else if(number.length < 12)
    {
        msg = "Phone Number must be exactly 12 characters"
    }
    else if(!car)
    {
        msg = "Car Name must be filled!!"
    }
    else if(!mileage)
    {
        msg = "Car Mileage must be filled!!"
    }
    else if(!year)
    {
        msg = "Year of the car's release must be filled!!"
    }
    else if(year.length<3)
    {
        msg = "please enter a legit year"
    }
    else if(!ats)
    {
        msg = "You must agree to all the terms"
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