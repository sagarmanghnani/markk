import { Component } from '@angular/core';
import { UserRating } from 'src/modals/user-ratings';
import { ReviewService } from 'src/services/review.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userRatings:UserRating[] = [];
  constructor(
    public reviewService:ReviewService
  ) {
    this.getUserRatingOnStore()
  }


  getUserRatingOnStore():void {
    this.reviewService.getAllUserRatingForStore().subscribe(res => {
      this.userRatings = res;
      console.log(this.userRatings);
    });
  }
}
