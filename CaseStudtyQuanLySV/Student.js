class Student{
    constructor( name, dob, gender, address, parents, phone, note){
        this.name = name
        this.dob = dob
        this.gender = gender
        this.address = address
        this.parents = parents
        this.phone = phone
        this.note = note
    }
//     getNo(){
// return this.no
//     }
//     setNo(){
// this.no = no 
    // }
    getName(){
return this.name
    }
    setName(){
 this.name = name
    }
    getDob(){
return this.dob
    }
    setDob(){
this.dob = dob
    }
    getGender(){
return this.gender
    }
    setGender(){
this.gender =gender
    }
    getAddress(){
return this.address
    }
    setAddress(){
this.address = address
    }
    getParents(){
return this.parents
    }
    setParents(){
this.parents = parents 
    }
    getPhone(){
return this.phone 
    }
    setPhone(){
this.phone = phone 
    }
    getNote(){
return this.note 
    }
    setNote(){
this.note = note 
    }
    editStudent(){
        window.location.href="FormEdit.html"
    }
}