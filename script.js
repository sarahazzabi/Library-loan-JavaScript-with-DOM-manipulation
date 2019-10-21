var submitbtn = document.getElementsByClassName('registerbtn')
    submitbtn[0].addEventListener('click', validateForm);
function validateForm(){
    // Retrieving the values of form elements 
    var name = document.getElementById('namefield').value
    var email = document.getElementById('emailfield').value
    var birthYear = document.getElementById('yaerbirthfield').value
    
    // Defining error variables with a default value
    var nameErr = emailErr = birthYearErr = true
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name")
    } else {
        var regex1 = /^[a-zA-Z\s]+$/               
        if(regex1.test(name) === false) {
            printError("nameErr", "Please enter a valid name")
        } else {
            printError("nameErr", "")
            nameErr = false
        }
    }
   
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address")
    } else {
        // Regular expression for basic email validation
        var regex2 = /^\S+@\S+\.\S+$/;
        if(regex2.test(email) === false) {
            printError("emailErr", "Please enter a valid email address")
        } else{
            printError("emailErr", "")
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(birthYear == "") {
        printError("birthYearErr", "Please enter your year of birth")
    } else {
        if( birthYear < 1900  || birthYear > 2019){
            printError("birthYearErr", "Please enter a year between 1900 and 2019")
        } else{
            printError("birthYearErr", "")
            birthYearErr = false;
        }
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || birthYearErr) == true) {
       return false
    } else  {
        
       // Creating a string from input data for preview
       var dataPreview = "You've entered the following details: \n" +
                         "Full Name: " + name + "\n" +
                         "Email Address: " + email + "\n" +
                         "Year of birth: " + birthYear + "\n" 
       
       // Display input data in a dialog box before submitting the form
       alert(dataPreview)
   }
   window.removeEventListener('mousewheel', showForm, false)
   document.getElementById('id01').style.display='none'
   if(name.includes("admin") == true && birthYear.includes("1967")){ 
       name = "Librarian"
       isadmin()
   }
   
   
   var userinfo = document.createElement('div')
       userinfo.classList.add('user-info')
       var userData = document.getElementsByClassName('user-Data')[0] // parent node
       var currentYear = new Date().getFullYear()
       var userFoo = 'foo'
       var userAge = currentYear - Number(birthYear)
   if(userAge < 18) 
    userFoo = 'Child'
   else
   userFoo = 'Adult'
   
        var userInfoContents = `
            <div>
                <img class = "userImg" src="images/USER.png" width="30px">
                <span id= "userId" class= "name userData" style="fontsize=20px;">${name}</span>
                <span class="email userData">( ${email} )</span>
                <span class="foo userData"> | ${userFoo} |</span>
                <button type = "button" class = " log-outbtn" id = "signout">SIGN OUT</button>
            </div>`
            userinfo.innerHTML = userInfoContents
            userData.appendChild(userinfo)
             document.getElementById('signout').addEventListener('click', signoutAction)
            document.getElementById('namefield').value = ""
            document.getElementById('emailfield').value = ""
           document.getElementById('yaerbirthfield').value = ""
   
    }