class Student
{
    constructor(){
        this.items=[];
    }
   
    name(fname,lname){
        this.fname=fname;
        this.lname=lname;
        
    }
    details(mob,address){
        this.mob=mob;
        this.address=address;
    }
    push(element){
        this.items.push(element);
        console.log(element+"pushed")
    }
    pop(element){
        this.items.pop(element);
        console.log("pop")
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }   
}
const sai=new Student();
console.log(sai);



sai.push("Sharan");
sai.pop("Sharan");
console.log(sai);



