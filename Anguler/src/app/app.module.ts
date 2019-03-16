import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeComponent } from './employee/employee.component';
// service file
import { EmpoyeeservicesService } from './shared/empoyeeservices.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmpoyeeservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
