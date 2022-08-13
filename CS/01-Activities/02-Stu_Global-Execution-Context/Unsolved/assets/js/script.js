// 1) Where is carNoise stored?
// Global const
const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global Scope
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // It is defined when the function goFast is called.
  // Its a parameter in the context of the function execution
  
  // 5) Where is makeNoise stored?
  //  Defined in the scope of the goFast execution
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // Uses the global const carNoise as the parameter for makeNoise which logs the speed and sound
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// Pause the call stack execution due to a browser confirm
// If, the user confirms, then executes the goFast function
// Nothing can be added to the callstack until blocking code
// is removed.
if(confirm("Do you want to go fast?")) {
  goFast(80);
}


// confirm is a web API
// 

// Window api's
// callback queue
// callstack