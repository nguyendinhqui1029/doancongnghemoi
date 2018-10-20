import { Injectable } from '@angular/core';
import { OBJECTDANGKI } from '../model/dangki';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class USERService {
    //url:string="http://localhost:7000/user";
    url:string="https://a35ansex1e.execute-api.us-west-2.amazonaws.com/dev/chay2";
    constructor(private http : Http){

    }
    addObjectDangKiWithObservable(objectdangki:OBJECTDANGKI): Observable<OBJECTDANGKI> {
      
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let chuoi="/"+objectdangki.email+"/"+objectdangki.matkhau+"/"+objectdangki.sodienthoai+"/"+objectdangki.hoten+"/"+objectdangki.chungminhnhandan;
           return  this.http.post(this.url+chuoi,objectdangki, options)
                       .map(this.extractData)
                       .catch(this.handleErrorObservable);
        }
    private extractData(res: Response) {
           let body = res.json();
           return body || {};
        }
    private handleErrorObservable (error: Response | any) {
        return Observable.throw(error.message || error);
      }
    
    LayThongTinDangNhap(taikhoan:String,matkhau:String):Observable<OBJECTDANGKI>
    {
    
      let chuoi="/"+taikhoan+"/"+matkhau;
         return  this.http.get(this.url+chuoi)
         .map((response: Response) => response.json());
     
    }
}