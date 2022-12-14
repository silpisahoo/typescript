const person ={
    name: 'silpi',
    age: 29,
    hobbies:['coding' , 'reading']
};
let favoriteactivities: string[];
favoriteactivities:['coding'];
console.log(person.name);
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}
