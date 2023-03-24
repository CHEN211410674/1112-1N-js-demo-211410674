import { students, sdata} from './data_74.js';//透過import宣告外部檔案(export)

console.log('sdata original', sdata);

sdata.sort(function(a,b){return b-a}); //sort排序
console.log('sdata sorted', sdata);
console.log(`The hightest score : ${sdata[0]}`);
console.log(`The lowest score : ${sdata[sdata.length-1]}`);

//for students

console.log('students', students);

const students2 = students.map((student) =>{
   //student.role = 'student';
   return {...student, role: 'student'}; 
});

console.log('students', students);
const averageStudents = students.reduce((total, student, index) => {
   console.log('index total', index, total);
   return total + student.score;
}, 0)/students.length;

console.log('Students average', averageStudents);

console.log('students2 original', students2);

students2.sort(function(a,b){return a.score - b.score}); //由大到小排序
console.log('students2 sorted', students2);

console.log(`The lowest score : ${students2[0].score}`);
console.log(`The hightest score :${students2[students2.length-1].score}`);



//sdata

console.log('sdata', sdata);

const sdata2 = students.map((student) =>{
   return {...student, role: 'student'}; 
});

console.log('sdata', sdata);

const averageSdata = sdata.reduce((total, student, index) => {
   console.log('index total', index, total);
   return total + student;
}, 0)/sdata.length;

console.log('Sdata average', averageSdata);

console.log('sdata2 original', sdata2);

sdata2.sort(function(a,b){return a.score - b.score}); //由大到小排序
console.log('sdata2 sorted', sdata2);

console.log(`The lowest score : ${sdata2[0].score}`);
console.log(`The hightest score :${sdata2[sdata2.length-1].score}`);











