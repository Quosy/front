import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable()
export class TokenService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('token');
        if (token !== '') {
            const modified = req.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } });
            return next.handle(modified);
        }
        return next.handle(req);
    }
}
