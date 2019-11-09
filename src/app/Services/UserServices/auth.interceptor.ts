import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/Interfaces/Users/new-user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const idToken = localStorage.getItem("token");

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