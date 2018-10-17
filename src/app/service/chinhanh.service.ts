import { Injectable } from '@angular/core';
import { ChiNhanh } from '../model/chinhanh';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { user } from '../model/user';
@Injectable()
export class ChiNhanhService {
    constructor(private http : Http){

    }
    getListChiNhanh():Observable<ChiNhanh[]> 
    {
       return  this.http.get("http://localhost:8081/chinhanh")
       .map((response: Response) => response.json());
    }

        
}
