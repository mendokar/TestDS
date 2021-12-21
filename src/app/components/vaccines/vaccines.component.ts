import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';
import { VaccinesService } from 'src/app/services/vaccines.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css']
})
export class VaccinesComponent implements OnInit {
  allVaccines:any = [];
  field:any;
  value:any;
  constructor(public employeService:EmployeService,public vaccinesService:VaccinesService) { }

  ngOnInit(): void {
    this.getAllVaccines();
  }

  /**
   * getAllVaccines
   */
  public getAllVaccines() {
    this.allVaccines = this.employeService.getAllVaccines();
    console.log(this.allVaccines,"A")
  }

  /**
   * filter
   */
  public filter() {
    this.allVaccines = this.vaccinesService.filtersVaccines(this.field,this.value);
  }

}
