const person={
    firstname:"vishal",
    lastname:"Doe",
    age:"50",
    eyeColor:"blue"
}
const showValues= Object.values(person);
console.log(showValues);
console.log(JSON.stringify(person));
const v1=JSON.stringify(person)
console.log(JSON.parse(v1));

const person2= new Object();
 person2.firstname="yash"
 person2.lastname="nigam"

 console.log(person2);

 person.height="6ft"

 person.eyeColor ="black"
 console.log(person);
 const data ="kumar"

 console.log(data);

 const personvishal = person["age"];
 console.log(personvishal);


