import { Component, OnInit } from '@angular/core';
import { ApitempService } from './../apitemp.service';

@Component({
  selector: 'app-carousl',
  templateUrl: './carousl.component.html',
  styleUrls: ['./carousl.component.css']
})


export class CarouslComponent implements OnInit {
dates: any ;

active = 'active';
  constructor(public you: ApitempService) { }
  ngOnInit() {
    this.you.getConfig().subscribe(res => {
      console.log (res);
      this.dates = res.data ;
      console.log(this.dates);
    });
  }
  activeDiv(f) {
    if (f === 0) {
      return this.active;
    }
  }
}
