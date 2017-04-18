// var students = [ 
//      {first_name:  'Michael', last_name : 'Jordan'},
//      {first_name : 'John', last_name : 'Rosales'},
//      {first_name : 'Mark', last_name : 'Guillen'},
//      {first_name : 'KB', last_name : 'Tonel'}
// ]


// console.log(students[0].first_name + " " + students[0].last_name);
// console.log(students[1].first_name + " " + students[1].last_name);
// console.log(students[2].first_name + " " + students[2].last_name);
// console.log(students[3].first_name + " " + students[3].last_name);


var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

console.log(Object.keys(users)[0]);

for(var i = 0 ; i < users.Students.length;i++){
    console.log((i+1) + " - " + users.Students[i].first_name + " " + users.Students[i].last_name + " - " + (users.Students[i].first_name.length +users.Students[i].last_name.length) );
}

console.log(Object.keys(users)[1]);

for(var i = 0 ; i < users.Instructors.length;i++){
    console.log((i+1) + " - " + users.Instructors[i].first_name + " " + users.Instructors[i].last_name + " - " + (users.Instructors[i].first_name.length +users.Instructors[i].last_name.length) );
}