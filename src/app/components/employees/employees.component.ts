import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {  
  duiPattern = '^[0-9]*$';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  textPattern = "[A-Z]+";
  employeForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, public serviceEmployees:EmployeService,public generalService:GeneralService) { }

  ngOnInit(): void {
    this.employeForm = this.formBuilder.group({
      dui: this.formBuilder.control('',[ Validators.required,Validators.pattern(this.duiPattern),Validators.minLength(9)]),
      names: this.formBuilder.control('', [Validators.required, Validators.pattern(this.textPattern)]),
      lastnames: ['', [Validators.required, Validators.pattern(this.textPattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],           
    })
  }

  onFormSubmit(): void {
    const formData = this.employeForm.value
    console.log(formData)
    // Call api post service here
    formData['pass'] = 'Qwerty!11';
    formData['typeUser'] = 'Empleado';
    this.serviceEmployees.saveEmployee(formData);
    this.generalService.showSuccess("Usuario registrado, su nueva clave es Querty!11");

  }

}
