import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamComponent } from './ham/ham.component';
import { FormsModule } from '@angular/forms';
import { CarouslComponent } from './carousl/carousl.component';
import { CardComponent } from './card/card.component';
import { CrrouselslideComponent } from './crrouselslide/crrouselslide.component';
import { ImageComponent } from './image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { FoderComponent } from './foder/foder.component';
import { ApitempService } from './apitemp.service';
@NgModule({

  declarations: [
    AppComponent,
    HamComponent,
    CarouslComponent,
    CardComponent,
    CrrouselslideComponent,
    ImageComponent,

    FoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApitempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
