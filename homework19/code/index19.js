let counterValue = 0;

let ladder = {

    up: function () { 
         counterValue += 1; 
         return this;
     },
    down: function () { 
         counterValue -= 1; 
         return this; 
     },
    showStep: function () { 
         return counterValue;
     }
};

 console.log(ladder.up().up().down().showStep());

// const result = ladder.up().up().up().down().showStep();
// console.log(result);   --- attention --- reference data type ---


// let ladder = {
//     counterValue: 0, 
//     up: function () { 
//         this.counterValue += 1; 
//         return this;
//     },
//     down: function () { 
//         this.counterValue -= 1; 
//         return this; 
//     },
//     showStep: function () { 
//         return this.counterValue; 
//     }
// };

// console.log(ladder.up().up().up().down().showStep()); 


