import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { promise } from 'protractor';
import { employee } from './employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmpoyeeservicesService {
  selectdEmployee: employee;
  employees: employee[];

  readonly url = "http://localhost:3000/employees";

  constructor(private http: HttpClient) { }


  // put data in database
  postEmployee(emp: employee) {
    return this.http.post(this.url, emp);
  }

}
