// const removeFromArray = function(array,...args){
//     const newArray = [];
  
//     array.forEach((item) => {
      
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
   
//     return newArray;
//   };

const removeFromArray = function(array, ...removeItem) {
     return array.filter(item => !removeItem.includes(item))

}



// this is the code that pass a single test
// const removeFromArray = function(array,removeItems) {
//   for(let i=0; i < array.length; i++){
//     if (array[i] == removeItems){
//        array.splice(i,1);      
//     }
//   }
// return array;
//     }
    




// Do not edit below this line 

module.exports = removeFromArray;
