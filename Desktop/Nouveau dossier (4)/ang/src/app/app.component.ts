import { Component } from '@angular/core';
import { logging } from 'protractor';
import { variable } from '@angular/compiler/src/output/output_ast';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  imgsrc = 'https://image.afcdn.com/recipe/20170607/67365_w300h300c1cx350cy350.jpg';
  col = 4;
  isa = false;
  val = 'angular';
  public val1 = 0;
  public val2 = 0;




  login() {
    console.log(this.val);
  }
  valeur1() {
    console.log(this.val1);

  }
  valeur2() {

    console.log(this.val2);
  }
  plus() {

    console.log((1 * (this.val1)) + (1 * (this.val2)));
  }
  moin() {
    console.log((this.val1) - (this.val2));
  }
}



