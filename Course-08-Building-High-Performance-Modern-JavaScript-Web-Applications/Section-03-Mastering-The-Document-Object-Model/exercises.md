#Exercises

####Exercise 1

**Questions 1**

Answer shown on codepen [here](http://codepen.io/imanuelgittens/pen/ygExPN)

**Question 2**

Answer shown on codepen [here](http://codepen.io/imanuelgittens/pen/QdxVmL)

**Question 3**

Answer shown on codepen [here](http://codepen.io/imanuelgittens/pen/qRKMYV)


####Exercise 2

**Question 1**

#####`HTMLParagraphElement`

**Properties**

`HTMLParagraphElement.align` - This property defines the alignment of the element's content with respect to the surrounding text. The possible values are "left", "right", "justify", and "center".

**Methods**

Contains no specific methods




#####`HTMLTableElement`

**Properties**

`HTMLTableElement.caption` - This property represents the first `<caption` that is a child of the table element or null if none is found.

`HTMLTableElement.tHead` - This property represents the first `<thead` element that is a child of the table element or null if none is found.

`HTMLTableElement.tFoot` - This property represents the first `<tfoot` element that is a child of the table element or null if none is found.

`HTMLTableElement.rows` - This property returns a live HTMLCollection containing all the child rows ( `<tr>` )of the table element.that is all <tr> that are a child of the element. These rows can come from either the `<thead>`, `<tbody>` or `<tfoot>` elements. Rows from the `<thead>` appear first, followed by the `<tbody>` and then `<tfoot>`.

`HTMLTableElement.tBodies` - This property returns a live HTMLCollection containing all the `<tbody` elements within the table.

`HTMLTableElement.sortable` - This property is a boolean value that indicates whether or not the browser provides a mechanism for sorting table.

`HTMLTableElement.align` - This property represents the alignment of the table's elements with respect to the surrounding text. The possible values are "left", "right", and "center".

`HTMLTableElement.bgColor` - This property is a DOMString containing the background color of the table's cells.

 `HTMLTableElement.border` - This property is a DOMString containing the width in pixels of the border of the table.

 `HTMLTableElement.cellPadding` - This property is a DOMString containing the pixel width of the horizontal and vertical space between the content of a table cell and its borders.

 `HTMLTableElement.cellSpacing` - This property contains the pixel width of the horizontal and vertical space between table cells.

 `HTMLTableElement.frame` - This property is a DOMString containing the type or external borders of the table. It represents the outdated "frame" attribute and can take the following values: "void", "above", "below", "hsides", "vsides", "lhs", "rhs", "box", or "border".

`HTMLTableElement.rules` - This property is a DOMString containing the type of internal borders of the table. It represents the outdated "frame" attribute and can take the following values: "none", "groups", "rows", "cols", or "all".

`HTMLTableElement.summary` - This property is a DOMString that contains a description of the purpose or structure of the table.

 `HTMLTableElement.width` - This property is a DOMString containing the the desired width of the table in pixels or as a percentage.

 **Methods**

 `HTMLTableElement.createTHead()` - This method returns an HTMLElement representing the first `<thead>` element of the table. If one is not found, one is created and insert into the table immediately before the first element that is neither a `<caption>`, nor a `<colgroup>`.

 `HTMLTableElement.deleteTHead()` - This method deletes the first `<thead>` element in the table.

 `HTMLTableElement.createTFoot()` - This method returns an HTMLElement representing the first `<tfoot>` element of the table. If one is not found, one is created and insert into the table immediately before the first element that is neither a `<caption>`, `<colgroup>` nor `<thead>`.

 `HTMLTableElement.deleteTFoot()` - This method deletes the first `<tfoot>` element in the table.

 `HTMLTableElement.createCaption()` - This method returns an HTMLElement representing the first `<caption>` element of the table. If one is not found, one is created and insert into the table.

 `HTMLTableElement.deleteCaption()` - This method deletes the first `<caption>` element in the table.

 `HTMLTableElement.insertRow()` - This method returns an `HTMLTableRowElement` representing a new row of the table. It inserts it in the rows collection immediately before the <tr> element at the given index position. If necessary a <tbody> is created.

 `HTMLTableElement.deleteRow()` - This method remove the table row at a given index.

 `HTMLTableElement.stopSorting()` - This method removes the sortable attribute on all `<th>` elements of the table.



 #####`HTMLButtonElement`

 **Properties**

`HTMLButtonElement.accessKey` - This property is a DOMString containing the single keyboard character to access the button.

 `HTMLButtonElement.autofocus` - This is a boolean property indicating whether or not the button should have input focus when the page is loaded.

 `HTMLButtonElement.disabled` - This is a boolean property indicating whether or not a user can click on the button.

 `HTMLButtonElement.form` - This property represents an HTMLFormElement associated with the button. If the button is a descendant of a form element then this property is the ID of that form element. If the button is not a descendant of a form element, then the attribute can be the ID of any form element in the same document associated with that button.

 `HTMLButtonElement.formAction` - This property is a DOMString that defines the URI of the resource that processes the information submitted by the button.

 `HTMLButtonElement.formEncType` - This property is a DOMString that defines the type of content that is used to submit the form to the server.

 `HTMLButtonElement.formMethod` - This property is a DOMString that defines the HTTP method used by the browser to submit the form.

 `HTMLButtonElement.formNoValidate` - This is a boolean property that indicates whether the form needs to be validated when it is submitted.

 `HTMLButtonElement.formTarget` - This property is a DOMString with a name or keyword that shows where to display the response received after submitting the form.

`HTMLButtonElement.labels` - This property is a nodelist containing all the `<label>` elements for this button.

`HTMLButtonElement.menu` - This property represents the menu element to be displayed if the button is clicked and is of type="menu".

`HTMLButtonElement.name` - This property is a DOMString that contains the name of the object when submitted with a form.

`HTMLButtonElement.tabIndex` - This property shows the button's position in the tab order.

`HTMLButtonElement.type` - This property is a DOMString that indicates the behaviour of the button. It can have the following values:
1. "submit": The button submits the form. This is the default value if the attribute is not specified.
2. "reset": The button resets the form.
3. "button": The button does nothing.
4. "menu": The button displays a menu

`HTMLButtonElement.validationMessage` - This property is a DOMString that shows a any error messages if the button doesn't meet the validation requirements.

`HTMLButtonElement.validity` - This property is a ValidityState representing the validity states that this button is in.

`HTMLButtonElement.value` - This property is a DOMString representing the current form control value of the button.

`HTMLButtonElement.willValidate` - This is a boolean property that indicates whether the button is a candidate for constraint validation.

#####Methods

Contains no specific methods

#####`HTMLBRElement`

#####Properties

`HTMLBRElement.clear` - This property is a DOMString indicating the flow of text around floating objects.

#####Methods

Contains no specific methods

#####`HTMLLIElement`

**Properties**

`HTMLLIElement.type` - This property is a DOMString that represents the type of bullets, "disc", "square" or "circle".

`HTMLLIElement.value` - This property indicates the position of the list item within a list.

####Exercise 3

See answer on codepen [here](http://codepen.io/imanuelgittens/pen/MJqJOG).

