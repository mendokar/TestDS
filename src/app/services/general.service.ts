import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  userType= "";
  dataUser: any;
  constructor(private toastr: ToastrService) { }

  /**
   * setUserLogin
   */
  public setUserLogin(userType:string) {
    this.userType = userType;
  }

  /**
   * currentUser
   */
  public currentUser() {
    return this.userType;
  }


  /**
   * currentDataUser
   */
  public setCurrentDataUser(current:any) {
    this.dataUser = current;
  }

  /**
   * currentDataUser
   */
  public currentDataUser() {
    return this.dataUser;
  }

  /**
   * saveDataStorage
   */
  public saveDataStorage(name:any,values:any) {
    localStorage.setItem(name,JSON.stringify(values));
  }

  /**
   * getDataStorage
   */
  public getDataStorage(name:any) {
    let datas:any = localStorage.getItem(name);

    return JSON.parse(datas);
  }

  showSuccess(msj:any) {
    this.toastr.success('', msj);
  }

  showError(msj:any) {
    this.toastr.error('', msj);
  }

}
