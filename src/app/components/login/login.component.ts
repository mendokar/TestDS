import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, public serviceAuth:AuthService, public generalService:GeneralService, public routEx:Router) { }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('admin@dominosoft.com', [Validators.required, Validators.pattern(this.emailPattern)]),
      pass: ['Qwerty!10', [Validators.required, Validators.min(6)]]     
    })
  }

  get keywordsControls(): any {
    return (<FormArray>this.loginForm.get('keywords')).controls;
  }

  onFormSubmit(): void {
    const formData = this.loginForm.value
    console.log(formData);
    // Call api post service here
    let login = this.serviceAuth.loginUser(formData.email,formData.pass);
    console.log(login[0]);
    if(login !== null){
     if(login.length > 0){
       if(login[0].typeUser === 'Administrador'){
        this.generalService.setUserLogin(login[0].typeUser);
        this.generalService.setCurrentDataUser(login);
        this.generalService.showSuccess('Bienvenido Administrador!');
        this.routEx.navigate(['menu']);
       }else{
        this.generalService.setUserLogin(login[0].typeUser);
        this.generalService.setCurrentDataUser(login);
        this.generalService.showSuccess('Bienvenido Empleado!');
        this.routEx.navigate(['menu']);
       }     
     }else{
      this.generalService.showError('No es posible iniciar, comuniquese con el Administrador.')
     }
    }else{
      this.generalService.showError('No es posible iniciar, comuniquese con el Administrador.')
    }
    
  }

}
