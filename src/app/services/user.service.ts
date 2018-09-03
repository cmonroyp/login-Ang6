import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { LoginResultModel } from '../model/LoginResultModel';
import { userInterface } from '../model/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private http: HttpClient) { }

  loginUser(email:userInterface, password: userInterface): Observable<LoginResultModel>{

    return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }
}
