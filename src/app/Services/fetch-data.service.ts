import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  textValue: any
  constructor() { }

  leftTextBox = new Subject();
  goBackBtnFlag = new Subject();
  currentStep = new ReplaySubject();

  setGoBackFlag(temp: boolean) {
    this.goBackBtnFlag.next(temp)
  }




}
