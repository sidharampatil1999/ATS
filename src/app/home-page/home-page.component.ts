import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { FetchDataService } from '../Services/fetch-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  step: number = 1;
  constructor(private fetchService: FetchDataService) {

  }

  ngOnInit() {
    this.fetchService.currentStep.subscribe((val: number) => {
      if (val <= 3 && val != 0) {
        this.step = val;
        console.log('step ' + this.step);
      }
    })
 
  }

  getCurrentStep() {

  }



 
 

}
