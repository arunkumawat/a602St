import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, ResponseContentType, Response  } from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  login_PromiseEx(username: string, password: string) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/2').pipe(map(r => {
        return r.json();
    })).toPromise();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + username);
  }
  logout() {
      if(localStorage.getItem('currentUserN')) {
        localStorage.removeItem('currentUserN');
      }
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
        if(error.status === 401 || error.status === 403) {
            window.location.href = '/#/login';
        }
        const body = error.json() || '';
        errMsg = `${error.status} - ${error.statusText || ''} ,     Please Contact support.`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}