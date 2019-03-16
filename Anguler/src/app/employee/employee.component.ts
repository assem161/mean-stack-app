import { Component, OnInit } from '@angular/core';
// services file import
import { EmpoyeeservicesService } from '../shared/empoyeeservices.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmpoyeeservicesService]
})
export class EmployeeComponent implements OnInit {

  constructor(private Emp: EmpoyeeservicesService) { }

  ngOnInit() {
  }


  onSubmit(form) {
    this.Emp.postEmployee(form.value).subscribe((res) => {
      console.log(form.value);
    })
  }

}
