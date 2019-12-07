import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreDetails } from 'src/modals/store-details';

@Injectable()
export class ReviewService {

    httpOptions:HttpHeaders = new HttpHeaders();
    GET_STORE_INFORMATION:string = `https://my-json-server.typicode.com/sagarmanghnani/markk/org_details`;
    constructor(
        public http:HttpClient,
    ){
        this.httpOptions = new HttpHeaders({
            "Content-type": "application/json"
        });
    }

    getAllStoreDetails(): Observable<StoreDetails[]>{
        return this.http.get<StoreDetails[]>(this.GET_STORE_INFORMATION);
    }

}