import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RecoverPasswordService {

    constructor(private http: HttpClient) {
    }

    recover(email: string): Observable<any> {
        return this.http.get(`${environment.API}/reset/${email}`);
    }

}
