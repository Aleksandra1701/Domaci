let student = {
    ime: "Bojan", 
    prezime: "Urosevic", 
    godine: "22",
    brojIndexa: "20201410",
   /* telefon: "381604767967",*/
    godinaUpisa: "2020", 
}
let godinaUpisa = 2021; 
console.log(student);
console.log(student.ime, student.prezime, student.brojIndexa);

    if (godinaUpisa == 2020) {
    console.log('Moze da polaze diplomski') 
    } else {
        console.log('Ne moze da polaze diplomski');
    }

    let newStudent = ['ime', 'Markovic', 'godine', 'brojIndexa', 'godinaUpisa'];
    console.log(newStudent);
    newStudent.push('Prosek');
    console.log(newStudent);
    newStudent.pop();
    console.log(newStudent);

    console.log(student.ime, newStudent[1]);