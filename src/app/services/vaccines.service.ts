import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {

  constructor(public generalService:GeneralService) { }

  /**
   * filtersVaccines
   */
  public filtersVaccines(type:any, value:any) {
    let employees:any = [];
    let search:any = [];
    employees = JSON.parse(this.generalService.getDataStorage('localEmployees'));

    for (let i = 0; i < employees.length; i++) {
      if(employees[i][type] === value){
        search.push(employees[i]);
      }
      
    }
    return search;
  }
}
