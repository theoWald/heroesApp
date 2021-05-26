import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return { ...this._auth! }
  }

  constructor( private http: HttpClient) { }

  verificarAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
              .pipe(
                map( auth => {
                  //console.log('map', auth);
                  this._auth = auth;
                  return true;
                })
              );

    //return of(true);
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
              .pipe(
                tap( resp => {
                    //console.log('AUTHSERVICE', resp)
                    this._auth = resp
                  }),
                tap( auth => localStorage.setItem('token', auth.id) )
              );
  }

  logout(){
    this._auth = undefined;
  }

}
