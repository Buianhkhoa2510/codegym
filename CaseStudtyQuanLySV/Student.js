class Student{
    constructor(no, name, dob, male, address, parents, phone, note){
        this.no = no
        this.name = name
        this.dob = dob
        this.male = male
        this.address = address
        this.parents = parents
        this.phone = phone
        this.note = note
    }
    getNo(){
return this.no
    }
    setNo(){
this.no = no 
    }
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
    getMale(){
return this.male
    }
    setMale(){
this.male = male
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
        window.location.href="http://127.0.0.1:5500/CaseStudtyQuanLySV/FormEdit.html"
    }
}