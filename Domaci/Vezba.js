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

    let sport = ['odbojka', 'fudbal', 'tenis', 'kosarka', 'rukomet']; 
    console.log(student.ime, newStudent[1], 'voli' + " " + sport[2]);
    console.log(student.ime, student.prezime, 'voli' + " " + sport[4]);

    function MySport(student, newStudent) {
        if (student.prezime != Urosevic && newStudent.sport !=tenis) {
                return true;
        } else {
            console.log("Bojan Markovic voli tenis");
        }
    }  
       
    
    
  