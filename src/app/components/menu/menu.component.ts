import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userType: string = "";

  constructor(public generalService:GeneralService) { }

  ngOnInit(): void {
    this.userType = this.generalService.currentUser();
    if(this.userType == ""){
      window.location.href = '/index.html';
    }
  }

  /**
   * deleteAllData
   */
  public deleteAllData() {
    localStorage.clear();
    window.location.href = '/index.html';
  }

  /**
   * close
   */
  public close() {
    window.location.href = '/index.html';
  }

}
