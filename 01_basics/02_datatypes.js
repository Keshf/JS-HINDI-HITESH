"use strict" 
/*
JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". 

Strict mode isn't just a subset: it intentionally has different semantics from normal code. 

Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. 

Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

Strict mode makes several changes to normal JavaScript semantics:

    Eliminates some JavaScript silent errors by changing them to throw errors.

    Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

    Prohibits some syntax likely to be defined in future versions of ECMAScript.

Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
*/

// alert(3+3) 

/*
window.alert() instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
*/

/******************DATA TYPES**************************/
console.log(typeof 34);         // number
console.log(typeof 23.45);      // number
console.log(typeof "tayyab");   // string
console.log(typeof 'a');        // string
console.log(typeof true);       // boolean
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined

