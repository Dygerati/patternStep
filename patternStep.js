// -> 1
// 11
// 21
// -> 1211
// 111221
// 312211
// 13112221

const nextStep = step => {
   // Create array from string
   const currArr = Array.from(step);
   // Current char in loop
   let currChar = currArr.shift();
   // Number of times char appeared
   let counter = 1;
   // Aggregation of next step
   let nextStep = '';

   // Loop while characters remaining
   while (currArr.length) {
      // Grab next one
      const next = currArr.shift();

      // If the same, inc and continue
      if (next === currChar) {
         counter++;
         continue;
      }

      // Otherwise update temp variables and continue
      nextStep += `${counter}${currChar}`;
      currChar = next;
      counter = 1;
   }

   // Update from final values
   nextStep += `${counter}${currChar}`;

   // Return
   return nextStep;
};

const patternStep = (startVal = '1', numSteps) => {
   // placeholder currString = startVal
   let currString = startVal;

   // loop: number of steps,
   for (let i = 0; i < numSteps; i++) {
      currString = nextStep(currString);
   }

   return currString;
};

console.log(patternStep('1', 3));
// 1211

