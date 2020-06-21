import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {camelCase, isArray, mapKeys, snakeCase} from 'lodash';

@Injectable()
export class SnakeCaseInterceptorService implements HttpInterceptor {

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.body) {
            req = req.clone({
                body: this.convertRequestBodyToSnakeCase(req.body),
            });
        }
        return next.handle(req).pipe(
            map((resp) => {
                if (resp instanceof HttpResponse) {
                    resp = resp.clone({
                        body: this.convertResponseBodyToCamelCase(resp.body),
                    });
                }
                return resp;
            })
        );
    }

    private convertRequestBodyToSnakeCase(body: any): any {
        if (typeof body !== 'object') {
            return body;
        }
        if (isArray(body)) {
            return body.map((o) => this.convertRequestBodyToSnakeCase(o));
        }
        return mapKeys(body, (v, k) => snakeCase(k));
    }

    private convertResponseBodyToCamelCase(body: any): any {
        if (typeof body !== 'object') {
            return body;
        }
        if (isArray(body)) {
            return body.map((o) => this.convertResponseBodyToCamelCase(o));
        }
        return mapKeys(body, (v, k) => camelCase(k));
    }
}
