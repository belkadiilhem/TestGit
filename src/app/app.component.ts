import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContactsComponent} from "./contacts/contacts.component";
import {AboutComponent} from "./about/about.component";
import {FormsModule} from "@angular/forms";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContactsComponent, AboutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Meriem';
  x: String='bonj'; age : number =19;
  y: number [] = [10,120,130];
  comment ={date: null, message:" "};
}
