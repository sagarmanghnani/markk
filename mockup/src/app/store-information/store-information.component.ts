import { Component, OnInit, ViewChild, ElementRef, Sanitizer } from '@angular/core';
import { StoreDetails } from 'src/modals/store-details';
import { ReviewService } from 'src/services/review.service';
import { DomSanitizer } from '@angular/platform-browser';



declare var google;
@Component({
  selector: 'app-store-information',
  templateUrl: './store-information.component.html',
  styleUrls: ['./store-information.component.scss'],
})
export class StoreInformationComponent implements OnInit {
  storeDetail:StoreDetails = new StoreDetails;
  constructor(
    public reviewService:ReviewService,
    public sanitizer:DomSanitizer
  ) { }

  ngOnInit() {
    this.getAllStoreDetails();

  }


  getAllStoreDetails():void{
    this.reviewService.getAllStoreDetails().subscribe(res => {
      this.storeDetail = res[0];
      console.log(this.storeDetail);
    });
  }

  storeRating():string{
    return `../../assets/${this.storeDetail.store_rating_icon}.png`;
  }

  embedGoogleMap(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyBUJtB_7Ou-Sb3-mzyGLYlkdlRhEjzFCZM&q=${this.storeDetail.store_address}`);
  }



}
