import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreInformationComponent } from 'src/app/store-information/store-information.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewService } from 'src/services/review.service';
import { UserRatingCardComponent } from 'src/app/user-rating-card/user-rating-card.component';
import { FooterComponent } from 'src/app/footer/footer.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
    ],
    declarations: [
        HeaderComponent,
        StoreInformationComponent,
        UserRatingCardComponent,
        FooterComponent
    ],
    providers: [
        ReviewService
    ],
    exports: [
        HeaderComponent,
        StoreInformationComponent,
        UserRatingCardComponent,
        FooterComponent
    ]
})
export class SharedModule {}