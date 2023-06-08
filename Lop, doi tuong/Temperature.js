class Temperature 
{
    constructor (doC){
        this.doC = doC
    }
    chuyenDoiSangF(){
        let f = this.doC*1.8+32;
        return f
    }
    chuyenDoiSangK(){
        let k = this.doC+273.15;
        return k
    }
}
let Tem = new Temperature(25);
console.log(Tem.chuyenDoiSangF());
console.log(Tem.chuyenDoiSangK())