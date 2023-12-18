import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceEmpService} from "../services/service-emp.service";
import {Employe} from "../employe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [CommonModule, FormsModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  EmpList: Employe[]=[];

constructor(private empService:ServiceEmpService) {
}
showList(){
  this.EmpList=this.empService.getAllEmp();
}

    ngOnInit(): void {
  this.showList();
    }

    deletAll() {
         this.EmpList=[];
    }

}
