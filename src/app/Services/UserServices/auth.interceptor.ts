import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Interfaces/Users/new-user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const idToken = JSON.parse(localStorage.getItem("token"));

        if(idToken){
            const newRequest = req.clone({
                headers: req.headers.set("x-access-token",idToken)
            });

            console.log(newRequest);
            return next.handle(newRequest);

        } else{
            return next.handle(req);
        }
    }
}