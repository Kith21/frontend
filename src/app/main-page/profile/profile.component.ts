import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../register/employee';
import { ProfileserviceService } from './profileservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private __httpService : ProfileserviceService ) { }
   id : number;
    name: string;
    dob: string;
    phno: number;
    username :string;
    password : string;
    role :string;

    employee : Employee;
    model =  new Employee('','',0,'','','');

  ngOnInit() {
  }

home1(){
	this.router.navigate(['main-page']);
}

updatesuper(){
        //var uData = [];
        //var id = this.updateSelected();
        this.employee = new Employee(this.model.name,this.model.dob,this.model.phno,this.model.username,this.model.password,this.model.emp_role);
        this.employee.emp_no = this.model.emp_no;
        //console.log(this.employee);
        //console.log(id);
        this.__httpService.updateSuperuser(this.model.emp_no,this.employee).subscribe(data => console.log(data));
           
    }
}
