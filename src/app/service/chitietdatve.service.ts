import {Injectable} from '@angular/core';
import {Http,Headers,Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import { CHITIETDATVEXE } from '../model/chitietdatve';
@Injectable()
export class ChiTietDatVeService
{
    url:any="https://2a8qywtfd3.execute-api.us-west-2.amazonaws.com/chay1/chay1";
    constructor(private http : Http){

    }
    getListChiTietDatVe():Observable<CHITIETDATVEXE[]> 
    {
       return  this.http.get(this.url)
       .map((response: Response) => response.json().Items);
    }
    addThongTinChiTietDatVe(chitietdatve:CHITIETDATVEXE) 
    {
        // let soghetam:any="";
        // chitietdatve.soghe.forEach(soghe=>{
            
        //     if(chitietdatve.soghe.lastIndexOf(soghe))
        //     {
        //         soghetam+=soghe;
        //     }else{
        //         soghetam+=soghe+",";
        //     }
            
        // });
        // chitietdatve.soghe=soghetam;
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
           return  this.http.post(this.url,chitietdatve, options)
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
}