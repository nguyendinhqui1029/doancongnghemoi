import { Injectable } from '@angular/core';
import { OBJECTDANGKI } from '../model/dangki';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class USERService {
    url:string="http://localhost:7000/user";
    constructor(private http : Http){

    }
    addObjectDangKiWithObservable(objectdangki:OBJECTDANGKI): Observable<OBJECTDANGKI> {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            const body =JSON.stringify('{"email":"aaa","matkhau":"bbb","chungminhnhandan":"cccc","hoten":"aaa","matkhaunhaplai":"cccc","sodienthoai":"casdc","tinh":"vv"}');
           return  this.http.post(this.url,body, options)
                       .map(this.extractData)
                       .catch(this.handleErrorObservable);
        }
        private extractData(res: Response) {
                let body = res.json();
                return body || {};
              }
          private handleErrorObservable (error: Response | any) {
              console.log();
            return Observable.throw(error.message || error);
            }
}