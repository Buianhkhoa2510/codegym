class Human {
constructor (name, gender, weight)
{
    this.name= name;
    this.gender = gender;
    this.weight = weight;
}
isMale(){
    return this.gender;
}
setGender(){
    this.gender = this.gender;
}
checkApple(a){
return a.isEmpty()
}
eat(b){
    if(b.weight > 0){
        b.decrease();
        this.weight++;
    }else{alert("Het tao roi")}
}
say(c){
    console.log(this.name + ': ahihi' ,c)
}
getName(){
    return this.name;
}
setName(name){
    this.name = name
}
getWeight(){
    return this.weight;
}
setWeight(weight){
    this.weight = weight
}
}

