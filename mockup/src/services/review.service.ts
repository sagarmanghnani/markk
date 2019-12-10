import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreDetails } from 'src/modals/store-details';
import { Constants } from 'src/Constants';
import { UserRating } from 'src/modals/user-ratings';

@Injectable()
export class ReviewService {

    httpOptions:HttpHeaders = new HttpHeaders();
    GET_STORE_INFORMATION:string = `${Constants.BASE_URL}/org_details`;
    GET_USER_RATINGS:string = `${Constants.BASE_URL}/user_rating`
    constructor(
        public http:HttpClient,
    ){
        this.httpOptions = new HttpHeaders({
            "Content-type": "application/json"
        });
    }

    getAllStoreDetails(): Observable<StoreDetails[]>{
        return this.http.get<StoreDetails[]>(this.GET_STORE_INFORMATION, {
            headers: this.httpOptions
        });
    }

    getAllUserRatingForStore(): Observable<UserRating[]>{
        return this.http.get<UserRating[]>(this.GET_USER_RATINGS, {
            headers: this.httpOptions
        });
    }

}