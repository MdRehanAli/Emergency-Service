### 1-5 no questions answer :


1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**Ans 1:**
**getElementById:** By using getElementById, we can get element with specific id. Here we can get only an element.
**getElementsByClassName:**  By using getElementsByClassName, we can get element with specific class. Here we can get more than one element
**querySelector:** By using querySelector, we can get the first element, that matches CSS selectors, like id, class and tag.
**querySelectorAll:** By using querySelectorAll, we can get all the element, that matches CSS selectors, like id, class and tag.


2. How do you **create and insert a new element into the DOM**?
**Ans 2:**
Create a h1 element:   document.createElement('h1');
Insert a h1 element:   document.getElmentById('h1').appendChild('AnyElements InnerText');



3. What is **Event Bubbling** and how does it work?
**Ans 3:**
Event Bubbling is the process where event start with a target element and move it to its parents element.

Working process:
At first click a target child element, then  it move its parent element, then corrent element also move to it parent as well, this process can be work till a null parent element could be found.


4. What is **Event Delegation** in JavaScript? Why is it useful?
**Ans 4:** Event Delegation is a such kind of technique, where we can put a value as a child element, according to its parent.



5. What is the difference between **preventDefault() and stopPropagation()** methods?
**Ans 5:**
preventDefault(): PreventDefault() is use for stopping default nature of any events, like form submission.
stopPropagation(): stopPropagation() is use for stopping parent elements event handler.
