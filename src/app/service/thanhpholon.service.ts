import { Injectable } from "@angular/core";
import {Diadiemthanhpholon} from '../model/diadiemthanhpholon';
import {Http,Headers,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ThanhPhoLonService
{
    url:any="https://6begeyo7k2.execute-api.us-west-2.amazonaws.com/diadiem/diadiemtp";
 constructor(private http: Http)
 {

 }

 laydanhsachthanhpholon():Observable<Diadiemthanhpholon[]>
 {
    return this.http.get(this.url)
    .map((response:Response)=>response.json().Items);
 }
}