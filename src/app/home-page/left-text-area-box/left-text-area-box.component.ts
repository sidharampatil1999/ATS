import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import keyword_extractor from 'keyword-extractor';
import { FetchDataService } from '../../Services/fetch-data.service';


@Component({
  selector: 'app-left-text-area-box',
  templateUrl: './left-text-area-box.component.html',
  styleUrl: './left-text-area-box.component.css'
})
export class LeftTextAreaBoxComponent implements OnInit, AfterViewInit {

  @ViewChild('textRefVar') textBox: ElementRef

  textValue: any;
  currentStep: number;

  constructor(private fetchService: FetchDataService) {

  }

  ngOnInit() {
    this.fetchService.currentStep.subscribe((val: number) => {
      if (val == 2) {
        this.textBox.nativeElement.value = "";
        this.textBox.nativeElement.placeholder = "Please add your resume...";

      }
    })

  }
  ngAfterViewInit() {

  }


  textChange(inp: any) {
    //this.fetchService.textValue = inp.target.value;
    if (inp.target.value == '') {
      this.fetchService.leftTextBox.next('empty');

    }
    else {
      this.fetchService.leftTextBox.next(inp.target.value);

    }
  }

  ngOnDestroy() {
    //this.flag = false
    this.textBox.nativeElement.value = "";
  }



}
