import { Injectable } from '@angular/core';
import { ChiNhanh } from '../model/chinhanh';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ChiNhanhService {
    url :string ="https://2joawegjk5.execute-api.us-west-2.amazonaws.com/chinhanh/chinhanh";
    constructor(private http : Http){

    }
    getListChiNhanh():Observable<ChiNhanh[]> 
    {
       return  this.http.get(this.url)
       .map((response: Response) => response.json().Items);
       
    }

        
}
