class Student {
constructor(_name, _age){
    this.name = _name;
    this.age = _age;
}
goToSchool(){
console.log('student ${this.name}  go to school')
}
}

let student_1 = new Student("Linh", 26)
student_1.goToSchool()
