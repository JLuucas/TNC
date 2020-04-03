import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { UserDataService } from './user-data.service';

@Injectable()
export class AutenticacaoService {

  constructor(private http: HttpClient, private userData: UserDataService) { }

  login(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'none',
        'Access-Control-Allow-Origin': '*',
      })
    };
    return this.http.post(environment.baseUrl+'auth/login', user, httpOptions).
      map((user: Response) => {
        if (user) {
          this.userData.registrar(JSON.stringify(user));
        }
      });
  }

  logout() {
    this.userData.logout();
  }

  registrar(user): void{
    this.userData.registrar(JSON.stringify(user));
  }

}



// WEBPACK FOOTER //
// ./src/app/service/autenticacao.service.ts