if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    isnotadmin()

    window.addEventListener('mousewheel', showForm, false)
    // By defult show english translation
    showEngTitle()
    document.getElementById('eng').addEventListener('click', showEngTitle)  
    document.getElementById('fre').addEventListener('click', showFrTitle)  
    document.getElementById('itl').addEventListener('click', showItTitle)

var submitbtn = document.getElementsByClassName('registerbtn')
    submitbtn[0].addEventListener('click', validateForm)


var addbtn = document.getElementsByClassName('add-item')
for (var i = 0; i < addbtn.length; i++) {
    var button = addbtn[i];
    button.addEventListener('click', addToBasketClicked)
}

document.getElementsByClassName('btn-checkout')[0].addEventListener('click', checkoutClicked)

var adminremove = document.getElementsByClassName('remove-item')
     for (var i = 0; i < adminremove.length; i++) adminremove[i].addEventListener('click', removeItem)

     var adminupdate = document.getElementsByClassName('update-item')
     for (var i = 0; i < adminupdate.length; i++) adminupdate[i].addEventListener('click', updateItem)
}
    // Creating new file reader to read new item image file
    var oFReader = new FileReader();
    oFReader.onload = function (oFREvent) {
    document.getElementById("uploadPreview").src = oFREvent.target.result;
    }

    function isnotadmin(){
        var admin = document.querySelectorAll("[id='admin']")
        for(var i = 0; i < admin.length; i++) 
        admin[i].style.display='none'

        var user = document.querySelectorAll("[id='user']")
        for(var i = 0; i < user.length; i++) 
        user[i].style.display='block'
        
    }
    function isadmin(){
        var admin = document.querySelectorAll("[id='admin']")
        for(var i = 0; i < admin.length; i++) 
        admin[i].style.display='block'

        var user = document.querySelectorAll("[id='user']")
        for(var i = 0; i < user.length; i++) 
        user[i].style.display='none'
    }

    function signoutAction(event){

        var userinfoblock = event.target
        var userDiv = userinfoblock.parentElement
        var userNow = userDiv.getElementsByClassName('name')[0].innerText
        userDiv.remove()
        if(userNow.includes("Librarian")){
            isnotadmin()
            window.addEventListener('mousewheel', showForm, false)
        }
        else
            window.location.reload(true)
    }

    function showForm() {
    var registerForm = document.getElementById('id01')
    registerForm.style.display='block'  
    }

function showEngTitle(){
    var itemList = document.getElementsByClassName('availableList')[0]
    var itemli = itemList.getElementsByClassName('item')
    for (var i = 0; i < itemli.length; i++) {
     itemli[i].getElementsByClassName('title')[0].style.display = 'block'
     itemli[i].getElementsByClassName('frtitle')[0].style.display = 'none'
     itemli[i].getElementsByClassName('ittitle')[0].style.display = 'none'
    }
}

function showItTitle(){
 var itemList = document.getElementsByClassName('availableList')[0]
 var itemli = itemList.getElementsByClassName('item')
 for (var i = 0; i < itemli.length; i++) {
  itemli[i].getElementsByClassName('title')[0].style.display = 'none'
  itemli[i].getElementsByClassName('frtitle')[0].style.display = 'none'
  itemli[i].getElementsByClassName('ittitle')[0].style.display = 'block'
 }
}

function showFrTitle(){
 var itemList = document.getElementsByClassName('availableList')[0]
 var itemli = itemList.getElementsByClassName('item')
 for (var i = 0; i < itemli.length; i++) {
  itemli[i].getElementsByClassName('title')[0].style.display = 'none'
  itemli[i].getElementsByClassName('frtitle')[0].style.display = 'block'
  itemli[i].getElementsByClassName('ittitle')[0].style.display = 'none'
 }
}


// Print msg error on registration form
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


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

    function addToBasketClicked() {
        var button = event.target
        var libItem = button.parentElement.parentElement.parentElement
        var title = libItem.getElementsByClassName('title')[0].innerText
        var dueDate = libItem.getElementsByClassName('due-date')[0].innerText
        libItem.style.display='none'
        var today = new Date()
        var due = new Date()
        due.setDate(today.getDate() + Number(dueDate) )
        var basketRow = document.createElement('li')
        basketRow.classList.add('basket-row')
        var basketItems = document.getElementsByClassName('basket-items')[0] // parent node
     
         var basketRowContents = `
             <div class="basket-item basket-column">
             <span class="basket-item-title ">${title}</span>
             </div>
             <div class = "basket-due basket-column">
             <span class="basket-item-dueDate  ">${due.toDateString()}</span>
             <button class="btn btn-danger " type="button">REMOVE</button>
             </div>`
             basketRow.innerHTML = basketRowContents
             basketItems.append(basketRow)
 
         var removeBasketItembtn = document.getElementsByClassName('btn-danger')
         for (var i = 0; i < removeBasketItembtn.length; i++) {
             var button = removeBasketItembtn[i]
             button.addEventListener('click', removeBasketItem)
         }

    }

    function removeBasketItem(event) {
        var buttonClicked = event.target
       
    var basketItem = buttonClicked.parentElement.parentElement //li basket-item
    var basketTitle = basketItem.getElementsByClassName('basket-item-title')[0].innerText
    
        var available = document.getElementsByClassName('availableList')[0]
    
        var li = available.getElementsByClassName('item')
        for (var i = 0; i < li.length; i++) {
            var targetTitle = li[i].getElementsByClassName('title')[0].innerText
        
            if(basketTitle.includes(targetTitle) == true) {
                basketItem.remove()
                li[i].style.display = 'block'
                break
            }
            
        }
        
    }

    function checkoutClicked(event) {
        var basketItems = document.getElementsByClassName('basket-items')[0]
         if(confirm('Your total items are ' + basketItems.childElementCount + ' items'))
         {
             alert('Thank you for visiting Cummunity Library')
         while (basketItems.hasChildNodes()) {
             basketItems.removeChild(basketItems.firstChild)
         }
     }
            else { 
               alert('you have cancled your loan ')
               // To be checked in order to loop checkout list and available list to return item back to available
               var available = document.getElementsByClassName('availableList')[0]
               var li = available.getElementsByClassName('item')
               while (basketItems.hasChildNodes()) {
                 basketItems.removeChild(basketItems.firstChild)
             } 
               for (var i = 0; i < li.length; i++) {        
                 if(li[i].style.display == 'none') {
                     li[i].style.display = 'block'   
                 } 
             } 
             }
         }    

    function removeItem(event){
         var removetarget = event.target
         removetarget.parentElement.parentElement.remove()
                
        }

        function updateItem(event){
            var updatetarget = event.target
            var targetduedate = prompt("Please enter a new loan period", " ");
            updatetarget.parentElement.getElementsByClassName('due-date')[0].innerHTML = targetduedate
    
        }

        function newItemForm(){
            document.getElementsByClassName('add-newitem')[0].style.display='none' 
            document.getElementsByClassName('newItemForm')[0].style.display='block'
            var addnewItembtn = document.getElementsByClassName('add-newitemaction')[0]
            addnewItembtn.addEventListener('click', newItemAction)
    
        }
      
    
            function PreviewImage() {
                var oFReader = new FileReader();
                oFReader.readAsDataURL(document.getElementById("imgSrc").files[0]); 
        
                oFReader.onload = function (oFREvent) {
                    document.getElementById("uploadPreview").src = oFREvent.target.result;
                }
            }
    
        function newItemAction(){
            var newtitlefield = document.getElementById("newtitle").value
            var newtitlefieldFr = document.getElementById("frnewtitle").value
            var newtitlefieldIt = document.getElementById("itnewtitle").value
            var newduedatefield = document.getElementById("newduedate").value
            var newtypefield = document.getElementById("newtype").value
            var itemimg = document.getElementById('uploadPreview').src
            
            var newRow = document.createElement('li')
            newRow.classList.add("item")
            var ul = document.getElementsByClassName('availableList')[0] // parent node
                         
             var newRowContents = `
                <div class= "card">
                <img class= "imageSrc" src = "${itemimg}" style="width:100%"> 
                <div class="imgcontainer"> 
                <span class="title">${newtitlefield}</span>
                <span lang="fr" class="frtitle" style="display: none;">${newtitlefieldFr}</span>
                <span lang="it" class="ittitle" style="display: none;">${newtitlefieldIt}</span>  
                <span class="due-date" style="display: none;">${newduedatefield}</span>
                <span class="item-type">${newtypefield.toUpperCase()}</span>
                <button type="button" id = "user" style= "display: none;" class="btn add-item">Add </button>
                <button type="button"  id = "admin" class="btn remove-item">Remove </button>
                <button type="button" id = "admin"  class="btn update-item">Update duedate </button>
                </div>
                </div>`
             newRow.innerHTML = newRowContents
             ul.append(newRow)
             document.getElementById("newtitle").value = ''
             document.getElementById("frnewtitle").value = ''
             document.getElementById("itnewtitle").value = ''
             document.getElementById("newduedate").value = ''
             document.getElementById("newtype").value = ''
             document.getElementById('uploadPreview').src = "images/preview-icon.png"
             document.getElementById('imgSrc').value = ''
             document.getElementsByClassName('add-newitemaction')[0].removeEventListener("click", newItemAction)
            
             document.getElementsByClassName('add-newitemaction')[0].addEventListener('click', newItemAction)
            
             var addbtn = document.getElementsByClassName('add-item')
            for (var i = 0; i < addbtn.length; i++) 
            {
                addbtn[i].addEventListener('click', addToBasketClicked)
            }
            var adminremove = document.getElementsByClassName('remove-item')
            for (var i = 0; i < adminremove.length; i++){
                 adminremove[i].addEventListener('click', removeItem)
            }
            var adminupdate = document.getElementsByClassName('update-item')
            for (var i = 0; i < adminupdate.length; i++) {
            adminupdate[i].addEventListener('click', updateItem)
            }
        }
    
    