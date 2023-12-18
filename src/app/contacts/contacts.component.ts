import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ContactsService} from "../services/contacts.service";


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{

  employe={
    id: 1,
    nom:"Meriem",
    prenom:"Bent",
    email:"mimimi20@gmail.com"
  };

  etatEmp :boolean=false;


  modifierEmp() {
    this.employe={
      id: 2,
      nom: "aya",
      prenom: "benn",
      email: "ayaaaaa"

    }
  }
constructor(private _listesemp: ContactsService) {
}
  ngOnInit(): void {

  }

}
