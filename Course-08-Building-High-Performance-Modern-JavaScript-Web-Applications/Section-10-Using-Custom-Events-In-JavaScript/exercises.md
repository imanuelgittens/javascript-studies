##Exercises

#####Exercise 1

See answer on codepen [here](https://codepen.io/imanuelgittens/pen/MmrxQN)

#####Exercise 2

    unsibscribe(eventName, handler) {
        if (this.handlers.has(eventName)) {
            this.handlers.get(eventName).pop(handler);
        } 
    }
    
    unsibscribeAll(eventName) {
            if (this.handlers.has(eventName)) {
                this.handlers = [];
            } 
        }
        
#####Exercise 3

See answer on codepen [here](https://codepen.io/imanuelgittens/pen/jmYRQM)