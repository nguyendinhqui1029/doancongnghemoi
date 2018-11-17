import {Injectable} from '@angular/core';
import {Http,Headers,Response, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {TuyenDuong} from '../model/tuyenduong'
@Injectable()
export class TuyenDuongService
{
    url:any="https://06jj0jk0vk.execute-api.us-west-2.amazonaws.com/tuyenduong/tuyenduong";
    constructor(private http : Http){

    }
    getListTuyenDuong():Observable<TuyenDuong[]> 
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
       return  this.http.get(this.url,options)
       .map((response: Response) => response.json().Items);
    }
}