import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreInformationComponent } from 'src/app/store-information/store-information.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewService } from 'src/services/review.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
    ],
    declarations: [
        HeaderComponent,
        StoreInformationComponent
    ],
    providers: [
        ReviewService
    ],
    exports: [HeaderComponent, StoreInformationComponent]
})
export class SharedModule {}