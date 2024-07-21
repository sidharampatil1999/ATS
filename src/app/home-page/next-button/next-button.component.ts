import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FetchDataService } from '../../Services/fetch-data.service';
import { GetKeywordsService } from '../../Services/get-keywords.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrl: './next-button.component.css'
})
export class NextButtonComponent implements OnInit {

  isTextEntered: boolean = false
  enteredText;
  step: number = 1;
  @ViewChild('nextTempRef') next: ElementRef;
  subscription1: Subscription
  subscription2: Subscription


  constructor(private fetchService: FetchDataService, private keywordService: GetKeywordsService, private http: HttpClient) {

  }
  ngOnInit() {
    this.subscription1 = this.fetchService.leftTextBox.subscribe(val => {
      if (val != 'empty') {
        //console.log(val);
        this.isTextEntered = true;
        this.enteredText = val
      } else {
        this.isTextEntered = false;
        this.fetchService.goBackBtnFlag.next(this.isTextEntered)
        //this.fetchService.setGoBackFlag(this.isTextEntered)
      }
    });

    this.subscription2 = this.fetchService.currentStep.subscribe((val: number) => {
      this.step = val;
    })
  }
 
  clickNext() {
    var templateParams = {
      name: this.enteredText,
      notes: this.step,
    };
    if (this.isTextEntered) {
      this.fetchService.setGoBackFlag(this.isTextEntered)
      if (this.step == 1) {
        this.http.post('https://newfireprj-default-rtdb.firebaseio.com/test.json', templateParams).subscribe(val => {
        })
        this.keywordService.generateKeyword(this.enteredText)
        this.fetchService.currentStep.next(++this.step);
        this.isTextEntered = false;
      }
      else if (this.step == 2) {
        this.http.post('https://newfireprj-default-rtdb.firebaseio.com/test.json', templateParams).subscribe(val => {
        })
        this.keywordService.processKeywords(this.enteredText);
        this.fetchService.currentStep.next(++this.step);
        this.isTextEntered = false;
      }
    }
   
  }

  ngOnDestroy() {
    //this.flag = false
    if (this.subscription1 != undefined) {
      this.subscription1.unsubscribe();

    }
  }

}
