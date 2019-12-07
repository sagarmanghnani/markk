import { Component, OnInit } from '@angular/core';
import { StoreDetails } from 'src/modals/store-details';
import { ReviewService } from 'src/services/review.service';

@Component({
  selector: 'app-store-information',
  templateUrl: './store-information.component.html',
  styleUrls: ['./store-information.component.scss'],
})
export class StoreInformationComponent implements OnInit {

  storeDetails:StoreDetails[] = [];
  constructor(
    public reviewService:ReviewService
  ) { }

  ngOnInit() {
    this.getAllStoreDetails();

  }


  getAllStoreDetails(){
    this.reviewService.getAllStoreDetails().subscribe(res => {
      console.log(res);
    });
  }



}
