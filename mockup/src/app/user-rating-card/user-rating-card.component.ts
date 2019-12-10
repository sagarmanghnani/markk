import { ReviewService } from 'src/services/review.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UserRating } from 'src/modals/user-ratings';

@Component({
  selector: 'app-user-rating-card',
  templateUrl: './user-rating-card.component.html',
  styleUrls: ['./user-rating-card.component.scss'],
})
export class UserRatingCardComponent implements OnInit {

  @Input() userRatings:UserRating
  constructor(
    public reviewService:ReviewService
  ) { }

  ngOnInit() {
    // this.getUserRatingOnStore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes && changes['userRatings'] && changes['userRatings'].currentValue && changes['userRatings'].currentValue.user_id){
      this.userRatings = changes['userRatings'].currentValue;
      console.log(this.userRatings, "userratings");
    }
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
