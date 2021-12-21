import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public generalService: GeneralService) { }

  /**
   * loginUser
   */
  public loginUser(email: string, pass: string) {
    let userData: any = [];
    if (email === 'admin@dominosoft.com' && pass === 'Qwerty!10') {
      userData.push({ typeUser: "Administrador", name: "DominoSoft" })
      return userData;
    } else {
      let usersExists = JSON.parse(this.generalService.getDataStorage('localEmployees'));
      if (usersExists !== null) {
        if (usersExists.length > 0) {
          let exist = usersExists.some(function (el: any) {
            ////console.log("CODIGO EXISTE", el.code);
            if (el.email === email) {
              userData.push(el);
            }
            return userData;
          });
          console.log(exist);
        }
      }
    }
    return userData;
  }
}
