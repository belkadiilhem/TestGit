import { Injectable } from '@angular/core';
import {Employe} from "../employe";

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpService {
Emplist:Employe[]=[
  {id:1,nom:"nom1",prenom:"prenom1",email:"nom1.prenom1@gmail.com"},
  {id:2,nom:"nom2",prenom:"prenom2",email:"nom2.prenom2@gmail.com"},
  {id:1,nom:"nom3",prenom:"prenom3",email:"nom3.prenom3@gmail.com"}
];
getAllEmp(){
 return this.Emplist;
}
AddEmp(e:Employe){
this.Emplist.push(e);
}
  constructor() { }
}
