import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  categories: string[] = ['Sputnik', 'AstraZeneca', 'Pfizer', 'Jhonson&Jhonson']
  duiPattern = '^[0-9]*$';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  textPattern = "[A-Z]+";
  dayPattern = "/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/";
  employeForm!: FormGroup;
  vaccine= "";
  constructor(private formBuilder: FormBuilder, public serviceEmployees:EmployeService,public generalService:GeneralService) { }

  ngOnInit(): void {

    let dataUser = this.generalService.currentDataUser();

    console.log(dataUser);


    this.employeForm = this.formBuilder.group({
      dui: this.formBuilder.control(dataUser[0].dui,[ Validators.required,Validators.pattern(this.duiPattern),Validators.minLength(9)]),
      names: this.formBuilder.control(dataUser[0].names, [Validators.required, Validators.pattern(this.textPattern)]),
      lastnames: [dataUser[0].lastnames, [Validators.required, Validators.pattern(this.textPattern)]],
      email: [dataUser[0].email, [Validators.required, Validators.pattern(this.emailPattern)]],
      dateBorn: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      vaccine: ['', [Validators.required]],
      vaccineType: ['',],
      vaccineDate: ['',],
      vaccineDosis: ['',],
    })
  }

  onFormSubmit(): void {
    const formData = this.employeForm.value
    console.log(formData)
    // Call api post service here
    this.serviceEmployees.updateEmployee(formData);    
    this.generalService.showSuccess("Datos Actualizados, Gracias!");
  }

  /**
   * onOptionsSelected
   */
  public onOptionsSelected(value:any) {
    console.log("value", value);
  }

}
