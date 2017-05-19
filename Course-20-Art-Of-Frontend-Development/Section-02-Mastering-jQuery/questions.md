##Questions


####Explain how event bubbling and event propagation work. Use code samples to demonstrate how event bubbling and event propagation both work.


Event bubbling directs an event to its intended target and was introduced to deal with situations where a single event, such as a mouse click, may be handled by more than one event handler at different levels of the DOM hierarchy. 

Event bubbling works like this - 

- When an event is triggered on an element, it first runs the handlers on it, then on its parent, then all the way up on its other ancestors until it hits the document or window object. 

We can see an example of bubbling in action using this codepen [example](https://codepen.io/imanuelgittens/pen/vmVPGR).

If you click the innermost paragraph element you still see the event being triggered even though we didn't define an event listener on that paragraph. Because we defined a click event listener on a parent element of that paragraph however, that listener is triggered as the event "bubbles" up the DOM to the root document or window object.

Event propagation and event bubbling are sometimes used synonymously however event propagation is a wider term. It covers both event bubbling and event capturing. 
Event capturing can be thought of as somewhat like the opposite of event bubbling. With event bubbling, the event is triggered as it travels "up" the DOM to the root document or window object. With event capturing, the event is triggered as it initially travels "down" from the root document or window object. 

The image below shows the capturing and bubbling phases in action. 

![img](https://javascript.info/article/bubbling-and-capturing/eventflow.png)

It should be noted that event capturing is rarely used and not even supported in some browsers however it can be useful in some cases. 