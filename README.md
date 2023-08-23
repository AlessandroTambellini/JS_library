# JS_library
JS library for personal reference

## files
* `strictEqual.js`  
    __Solve the following JavaScript comparison evaluations__  
    - `NaN === NaN` returns **false**
    - `Object.is(0, -0)` returns **false**
* `throttle.js`  
    __Control and limit the frequence function is called__  
    The first time the throttled function is called, it is immediately executed. The next times, it is executed once per delay specified. The data passed to the function to be executed is that of the most recent call.
* `promiseSequence.js`  
    __Execute and arbitrary number of promises in sequence__   
    In JavaScript there is Promise.all() to execute and arbitrary number of promises in parallel and there are the chains of Promise (.then().then()) to execute a fixed number of promises in sequence. However there isn't a method to execute an arbitrary number of promises in sequence.  
    *You could also add this function as a method of the Promise class but, I discourage it, because if in future will be added a method with the name you specify for this function, (ex. Promise.sequence()) there are going to be compatibility issues.*

