import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(public generalService:GeneralService) { }

  /**
   * saveEmployee
   */
  public saveEmployee(employee:any) {
    let employees:any = [];
    employees = JSON.parse(this.generalService.getDataStorage('localEmployees'));
    if(employees !== null){
      employees.push(employee);
      this.generalService.saveDataStorage('localEmployees',JSON.stringify(employees));
    }else{
      employees = [];
      employees.push(employee);
      this.generalService.saveDataStorage('localEmployees',JSON.stringify(employees));
    }
  }

  /**
   * updateEmployee
   */
  public updateEmployee(employee:any) {
    
    let usersExists = JSON.parse(this.generalService.getDataStorage('localEmployees'));
    if (usersExists !== null) {
      if (usersExists.length > 0) {
        let exist = usersExists.some(function (el: any, i:any) {
          ////console.log("CODIGO EXISTE", el.code);
          console.log(i);
          if (el.email === employee.email) {
            //userData.push(el);
            console.log(el);
            usersExists[i] = employee;
            
          }
          return usersExists;
        });
        this.generalService.saveDataStorage('localEmployees',JSON.stringify(usersExists));
        console.log(exist);
      }
  }
}

  /**
   * getAllVaccines
   */
  public getAllVaccines() {
    let employees:any = [];
    employees = JSON.parse(this.generalService.getDataStorage('localEmployees'));
    return employees;
  }
}
