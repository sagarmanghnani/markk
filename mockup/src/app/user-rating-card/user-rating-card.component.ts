import { ReviewService } from 'src/services/review.service';
import { Component, OnInit } from '@angular/core';
import { UserRating } from 'src/modals/user-ratings';

@Component({
  selector: 'app-user-rating-card',
  templateUrl: './user-rating-card.component.html',
  styleUrls: ['./user-rating-card.component.scss'],
})
export class UserRatingCardComponent implements OnInit {

  userRatings:UserRating = new UserRating();
  constructor(
    public reviewService:ReviewService
  ) { }

  ngOnInit() {
    this.getUserRatingOnStore();
  }

  getUserRatingOnStore():void {
    this.reviewService.getAllUserRatingForStore().subscribe(res => {
      this.userRatings = res[0];
      console.log(this.userRatings);
    });
  }

  getCardBackgroundImage():string{
    return `url(${this.userRatings.user_rating_pic})`;
  }

  getUserRating():string {
    return `../../assets/${this.userRatings.user_rating_icon}.png`;
  }

  


}
