class Student {
    constructor(name, surName, birthDate, assessments = []) {
        this.name = name;
        this.surName = surName;
        this.birthDate = birthDate;
        this.assessments = assessments;
        this.arrayOfStudentAttendants = new Array(12).fill(null);
    }

    getAge() {
        let studentAge = new Date().getFullYear() - this.birthDate;
        return studentAge;
    }

    getAverage() {
        const grades = this.assessments;
        const sum = grades.reduce((total, grade) => total + grade, 0);
        const average = sum / grades.length;
        return average;
    }

    present() {
        const indexOfFirstEmptySlot = this.arrayOfStudentAttendants.indexOf(null);
        if (indexOfFirstEmptySlot !== -1) {
            this.arrayOfStudentAttendants[indexOfFirstEmptySlot] = true;
        }
    }

    absent() {
        const indexOfFirstEmptySlot = this.arrayOfStudentAttendants.indexOf(null);
        if (indexOfFirstEmptySlot !== -1) {
            this.arrayOfStudentAttendants[indexOfFirstEmptySlot] = false;
        }
    }

    summary() {
        const numberOfAttendances = this.arrayOfStudentAttendants.filter(status => status === true).length;
        const averageAttendance = numberOfAttendances / this.arrayOfStudentAttendants.length;
        const averageGrade = this.getAverage();

        const allPresent = this.arrayOfStudentAttendants.every(status => status === true);

        if (averageGrade > 90 && averageAttendance > 0.9 && allPresent) {
            return "Молодець!";
        } else if (averageGrade > 90 || averageAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student('Viktor', 'Yakymenko', 2000, [95, 100, 95, 97, 100, 98, 100]);
console.log(student1);
const studentAge1 = student1.getAge();
console.log(studentAge1);

student1.present();
student1.present();
student1.present();
student1.absent();
console.log(student1.summary());


const student2 = new Student('Taras', 'Podbereznyy', 1994, [89, 75, 63, 78, 90, 76, 54]);
console.log(student2);
const studentAge2 = student2.getAge();
console.log(studentAge2);

student2.absent();
student2.absent();
student2.absent();
student2.present();
console.log(student2.summary());


const student3 = new Student('Marina', 'Kyrilenko', 1997, [100, 100, 100, 95, 97, 100, 100, 97, 94, 98, 100, 97]);
console.log(student3);
const studentAge3 = student3.getAge();
console.log(studentAge3);

// Щоб привести третього студента до статусу "Молодець!", просто додайте йому відсутність у метод summary
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log(student3.summary());



// function Student(name, surName, birthDate, assesments = []) {
//         this.name = name;
//         this.surName = surName;
//         this.birthDate = birthDate;
//         this.assesments = assesments;
//         this.arrayOfStudentAttendants = new Array(12).fill(null); // Початкове заповнення масиву null
// }
    
//     Student.prototype.getAge = function() {
//         let studentAge = new Date().getFullYear() - this.birthDate;
//         return studentAge;
//     }
    
//     Student.prototype.getAverage = function() {
//         const grades = this.assesments;
    
//         const sum = grades.reduce((total, grade) => total + grade, 0);
    
//         const average = sum / grades.length;
    
//         return average;
//     }
    
    
//     Student.prototype.present = function() {
//         const indexOfFirstEmptySlot = this.arrayOfStudentAttendants.indexOf(null);
//         if (indexOfFirstEmptySlot !== -1) {
//             this.arrayOfStudentAttendants[indexOfFirstEmptySlot] = true;
//         }
//     }
    
//     Student.prototype.absent = function() {
//         const indexOfFirstEmptySlot = this.arrayOfStudentAttendants.indexOf(null);
//         if (indexOfFirstEmptySlot !== -1) {
//             this.arrayOfStudentAttendants[indexOfFirstEmptySlot] = false;
//         }
//     }
    
//     Student.prototype.summary = function() {
//         const numberOfAttendances = this.arrayOfStudentAttendants.filter(status => status === true).length;
//         const averageAttendance = numberOfAttendances / this.arrayOfStudentAttendants.length;
//         const averageGrade = this.getAverage();
    
//         const allPresent = this.arrayOfStudentAttendants.every(status => status === true);

//         if (averageGrade > 90 && averageAttendance > 0.9 && allPresent) {
//             return "Молодець!";
//         } else if (averageGrade > 90 || averageAttendance > 0.9) {
//             return "Добре, але можна краще";
//         } else {
//             return "Редиска!";
//         }
//     }
    

//     const student1 = new Student('Viktor', 'Yakymenko', 2000, [95, 100, 95, 97, 100, 98, 100]);
//     console.log(student1);
//     const studentAge1 = student1.getAge();
//     console.log(studentAge1);

//     student1.present();
//     student1.present();
//     student1.present();
//     student1.absent();
//     console.log(student1.summary());


//     const student2 = new Student('Taras', 'Podbereznyy', 1994, [89, 75, 63, 78, 90, 76, 54]);
//     console.log(student2);
//     const studentAge2 = student2.getAge();
//     console.log(studentAge2);

//     student2.absent();
//     student2.absent();
//     student2.absent();
//     student2.present();
//     console.log(student2.summary());



//     const student3 = new Student('Marina', 'Kyrilenko', 2003, [100, 100, 100, 95, 97, 100, 100, 97, 94, 98, 100, 97]);
//     console.log(student3);
//     const studentAge3 = student3.getAge();
//     console.log(studentAge3);

//     student3.present();
//     student3.present();
//     student3.present();
//     student3.present();
//     student3.present();
//     student3.present();
//     student3.present();
//     student3.present();
//     student3.present();
//     student3.present();
//     student3.present();
//     student3.present();
    

//     console.log(student3.summary());


    
    

    