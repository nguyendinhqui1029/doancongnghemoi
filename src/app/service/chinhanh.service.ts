import { Injectable } from '@angular/core';
import { ChiNhanh } from '../model/chinhanh';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ChiNhanhService {
    url :string ="https://2joawegjk5.execute-api.us-west-2.amazonaws.com/chinhanh/chinhanh";
    url1:string="https://imn5nvcqz5.execute-api.us-west-2.amazonaws.com/search2/search2/";
    constructor(private http : Http){

    }
    getListChiNhanh():Observable<ChiNhanh[]> 
    {
       return  this.http.get(this.url)
       .map((response: Response) => response.json().Items);
       
    }

    getTimChiNhanhLienHe(chuoi:any):Observable<ChiNhanh[]>{
        return this.http.get(this.url1+chuoi)
        .map((response: any) => response.json().hits.hit);
    }
        
}
