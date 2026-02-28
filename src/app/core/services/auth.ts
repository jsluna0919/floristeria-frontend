import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  
  private readonly apiUrl = `${environment.baseUrl}/${environment.apiVersion}`
  constructor(private http: HttpClient){}

  login(username: string, password: string){
    const basicToken = btoa(`${username}:${password}`)

    return this.http.get<any>(`${this.apiUrl}/usuarios/auth/me`,
      {headers :{Authorization: `Basic ${basicToken}`}})
      .pipe(tap(user => {
        localStorage.setItem('auth_token', basicToken)
        localStorage.setItem('user', JSON.stringify(user));}))
  }

  logout(){localStorage.clear()}
  
  getUser(){return JSON.parse(localStorage.getItem('user')||'{}')}

  getRole(): string {
    const user = this.getUser()
    return user.rolUsuario || ''
  }

  getName(): string{
    const user = this.getUser()
    return user.nombre || ''
  }
  
  isLogged(): boolean{return !!localStorage.getItem('auth_token')}

}