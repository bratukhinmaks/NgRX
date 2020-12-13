import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthResponse, CurrentUserInterface, LoginUserInterface, RequestUserInterface} from "../../shared/types";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(data: RequestUserInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponse>(`${environment.Url}/users`, data).pipe(
      map((resp)=> resp.user)
    )
  }
  login(data: LoginUserInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponse>(`${environment.Url}/users/login`, data).pipe(
      map((resp)=> resp.user)
    )
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http.get<AuthResponse>(`${environment.Url}/user`).pipe(
      map(resp => resp.user)
    )
  }
}
