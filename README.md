# Day 15-GUVI

> **DOM Manipulation with Forms**

> [Source Code](./index.html)  
> Explanation:
>
> - The [index.html](./index.html) file is where the skeleton of the webpage is coded.
> - A [_styles.css_](./css/styles.css) file is added in a folder named [css](./css/) for better readability. This file contains the custom css added to the web page.
> - Tha page is styled using raw CSS and BootstrapCSS. Media queries are added to add responsiveness to the page.
> - A form is created with required input fields such as First name, Last name, Address, Pin code, Gender, Choice of food1 and food2, state and Country.
> - A submit button is added to handle the form submission.
> - When the form is submitted, we handle the event by adding an event listener to the submission.
> - All values from the fields are retrieved and stored in respective variables.
> - We create a row(`tr`) and 8 cells(`td`) for the table using the `document.createElement()` method.
> - The values are then appended to the cells using `document.appendChild()`.
> - Finally, the cells are appended to the row using `document.append()`
> - All the input fields are emptied by selecting them again using methods like `document.getElementById()` and `document.querySelector()`.

---
