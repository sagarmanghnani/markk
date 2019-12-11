import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreDetails } from 'src/modals/store-details';
import { Constants } from 'src/Constants';
import { UserRating } from 'src/modals/user-ratings';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class ReviewService {

    httpOptions:HttpHeaders = new HttpHeaders();
    GET_STORE_INFORMATION:string = `${Constants.BASE_URL}/org_details`;
    GET_USER_RATINGS:string = `${Constants.BASE_URL}/user_rating`;
    isLoading:boolean;
    constructor(
        public http:HttpClient,
        public loadingCtrl:LoadingController
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

    async present() {
        this.isLoading = true;
        return await this.loadingCtrl.create({
          duration: 5000,
        }).then(a => {
          a.present().then(() => {
            console.log('presented');
            if (!this.isLoading) {
              a.dismiss().then(() => console.log('abort presenting'));
            }
          });
        });
      }
    
      async dismiss() {
        this.isLoading = false;
        return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
      }



}