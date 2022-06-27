//CREATING MULTIDIMENSIONAL ARRAY
let student1 = ['Jay', 22];
let student2 = ['Saroj', 24];
let student3 = ['Piyush', 25];

//multidimensional array
let studentsData = [student1, student2, student3];

//adding element to outer array
studentsData.push(['Piyush', 25]);
console.log(studentsData); 

//adding element to inner array
studentsData[1].push('hello');
console.log(studentsData);

// remove element from outer array
studentsData.pop();
console.log(studentsData);

// remove element from inner array
studentsData[1].pop();
console.log(studentsData);