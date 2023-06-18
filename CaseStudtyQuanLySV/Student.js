class Student {
    constructor(name, dob, gender, address, parents, phone, note) {
        this._name = name;
        this._dob = dob;
        this._gender = gender;
        this._address = address;
        this._parents = parents;
        this._phone = phone;
        this._note = note;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get dob() {
        return this._dob;
    }

    set dob(value) {
        this._dob = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get parents() {
        return this._parents;
    }

    set parents(value) {
        this._parents = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get note() {
        return this._note;
    }

    set note(value) {
        this._note = value;
    }

    editStudent() {
        window.location.href = "http://127.0.0.1:5500/CaseStudtyQuanLySV/FormEdit.html"
    }
}