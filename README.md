
<h3>Objectives:</h3>
<br>
A. Create an HTML document with JavaScript that presents a user registration form and a library checkout page for a library.<br>
B. Add interactivity to the HTML page by manipulating the DOM using pure JavaScript<br>
<h3>Modifying DOM using JavaScript</h3>
Javascript allows you to modify the Document Object Model (DOM) of the current document. This means you can add/modify/remove page content in response to user actions without any server-side processing.

<h3>Basic functionality</h3>
1.	Display a user registration form that accepts name, email and year of birth.<br>
a.	Name must be limited to 100 chars and must be sanitized before displaying.<br>
b.	Only a valid email address must be accepted.<br>
c.	Year must be between 1900 and current year.<br>
d.	Once valid information is entered for all three, replace the labels and text boxes with content that has the format “Jane Doe (jdoe@example.com) [foo]” where “foo” is “Adult” if the age is over 18 and “Child’ if not.<br>
2.	Display a list of at least 10 items from books and CD’s including a picture of the item and name in English. Books are due in 30 days and CD’s are due in 10 days.<br>
3.	For each item, show an “Add” button. When the add button is clicked, update the basket (see below) and remove them from the available items list.<br>
4.	Display the item names in a second language based on user selection (item names only).<br>
5.	Show checkout basket which contains names of items that are added (no pictures, initially empty) and the due date of each item.<br>
6.	With each item, show a “remove” button that allows user to remove an item from the basket.<br>
7.	On the basket, show a “Checkout” button, which will show a dialog with two buttons (OK/Cancel) with the total number of items and if “OK” button is clicked, clear the basket. If “Cancel” button is clicked, then add the items back to “available” list.<br>
8.	If the name is “admin” and year of birth is “1867” Display “Librarian” as the name and provide management functionality below:<br>
a.	A mechanism to add new items.<br>
b.	A mechanism to remove existing items.<br>
c.	A mechanism to change the due date for books and CD’s<br>
d.	A logout button to return to normal operation.<br>


<h3> Sreenshots:</h3>
<br>
<div>
   <img  class= "imageSrc" src="checkout.png" style="width:50%">
</div>
<br>
<br>
<div>
   <img  class= "imageSrc" src="Items_in_the_library.png" style="width:50%">
</div>
<br>
<br>
<div>
   <img  class= "imageSrc" src="User_registration.png" style="width:50%">
</div>
<br>
<br>
