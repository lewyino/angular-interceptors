import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class LogInterceptorService implements HttpInterceptor {

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`make request: ${req.url}`);
        return next.handle(req).pipe(
            tap((resp) => {
                if (resp instanceof HttpResponse) {
                    console.log(`got response: ${resp.url}, status: ${resp.status}, body: ${JSON.stringify(resp.body)}`);
                }
            })
        );
    }
}
