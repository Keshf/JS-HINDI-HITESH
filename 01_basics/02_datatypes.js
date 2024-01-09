"use strict" 
/*
JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". 

Strict mode isn't just a subset: it intentionally has different semantics from normal code. 

Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. 

Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

Strict mode makes several changes to normal JavaScript semantics:

    1. Eliminates some JavaScript silent errors by  changing them to throw errors.

    2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

    3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
*/

// alert(3+3) 

/*
window.alert() instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
*/

/******************DATA TYPES**************************/
// primitive types

    // 1. number
            console.log(typeof 34);   
            console.log(typeof 23.45); 
    // 2. bigint              
            console.log(typeof 87523695693487n); 
    // 3. string
            console.log(typeof "tayyab"); 
            console.log(typeof 'a');
    //  4. boolean
            console.log(typeof true); 
    //  5. null
            console.log(typeof null);       // object
    //  6. undefined
            console.log(typeof undefined);  // undefined
    //  7. symbol
            console.log(typeof Symbol);     // function
            // Note: symbol is used to check uniquesness.


// non-primitive (Reference) types
    // Object 
        // 1. Array
                let arr = [1, "s", 3.5]
                console.log(typeof arr); // object
        // 2. Object
                let newObj = {
                    title: "OOPs",
                    author: "Tayyab"}
                    console.log(typeof newObj); // object
        // 3. Function 
                let newFunc = function (){
                    console.log("");
                }
                console.log(typeof newFunc); // function

/*
Typeof val	                   Result

Undefined	                "undefined"
Null	                    "object"
Boolean	                    "boolean"
Number                  	"number"
String                  	"string"

Object                      "object"                    
(native and does not implement [[Call]])	

Object                      "function" 
(native or host and does implement [[Call]])

Object (host and does not implement [[Call]])	            
                        Implementation-defined except may  not be "undefined", "boolean", "number", or "string".



Ref: https://262.ecma-international.org/5.1/#sec-11.4.3                        
*/


