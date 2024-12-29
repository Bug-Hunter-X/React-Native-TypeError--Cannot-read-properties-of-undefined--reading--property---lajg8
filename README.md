# React Native TypeError: Cannot read properties of undefined (reading 'property')

This repository demonstrates a common React Native error: `TypeError: Cannot read properties of undefined (reading 'property')`. This error arises when attempting to access a property of an object that is null or undefined, frequently due to asynchronous data fetching.  The solution showcases how to use optional chaining and nullish coalescing to handle this gracefully.

## Bug Description
The bug is in `bug.js`. Accessing properties of objects before they are properly populated leads to the `TypeError`. Asynchronous operations (like fetching data) often cause this problem if not handled correctly.

## Solution
The `bugSolution.js` file demonstrates the solution using optional chaining (`?.`) and the nullish coalescing operator (`??`). These techniques provide a clean and concise way to handle potential null or undefined values, preventing the error.