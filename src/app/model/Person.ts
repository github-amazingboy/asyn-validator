export class Person {
    id:number = 0;
    name:string = "";
  
    static MockServerLimit(p:Person):boolean {
       return p.name.length%2 == p.id%2
    }
  }
  