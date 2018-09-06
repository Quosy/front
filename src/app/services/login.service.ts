import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data: any): Observable<any> {
        return this.http.post(`${environment.API}login`, data);
    }

}
