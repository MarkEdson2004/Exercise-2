let person = [
     { id:1, name: "Alice", age: 28 },
     { id:2, name: "Bob", age: 22 },
     { id:3, name: "Charlie", age: 30 },
 ];

 function updatePerson(id, updateData) {
     for (let i = 0; i < person.length; i++) {
         if (person[i].id === id) {
             person[i].name = updateData.name;
             person[i].age = updateData.age;
         }
     }

 }
     updatePerson(2, {name: "Robert", age: 26 });

 console.log(person);
 function isValidPassword(password) {
    
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

console.log(isValidPassword("PASsword123!")); 
console.log(isValidPassword("pass"));
function areValuesUnique(numbers) {
    return new Set(numbers).size === numbers.length;
}

console.log(areValuesUnique([1, 2, 3, 4]));
console.log(areValuesUnique([1, 2, 2, 4,]))