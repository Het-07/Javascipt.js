//ARRAY METHODS
let dailyActivities3 = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// this gives the total number of elements in an array
console.log(dailyActivities3.length);

// sorting elements in the alphabetical order
dailyActivities3.sort();
console.log(dailyActivities3); 

//finding the index position of string
const position = dailyActivities3.indexOf('work');
console.log(position);

// slicing the array elements
const newDailyActivities3 = dailyActivities3.slice(1);
console.log(newDailyActivities3); 

// concatenating two arrays
const routine = dailyActivities3.concat(newRoutine);
console.log(routine);
