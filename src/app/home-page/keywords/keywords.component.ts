import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FetchDataService } from '../../Services/fetch-data.service';
import { GetKeywordsService } from '../../Services/get-keywords.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrl: './keywords.component.css'
})
export class KeywordsComponent implements OnInit, AfterViewInit {

  missingKeywords: string[] = [];
  percentage: string;
  @ViewChild('percentageTemref') percentageMessgae: ElementRef
  constructor(private getKeywordService: GetKeywordsService) {

  }

  ngOnInit() {
    for (let i of this.getKeywordService.unavailableKeyword) {
      this.missingKeywords.push(i)
    }
    this.percentage = this.getKeywordService.percentage.toPrecision(4);
  }

  ngAfterViewInit() {
    if (this.getKeywordService.percentage < 80 && this.getKeywordService.percentage > 60) {
      this.percentageMessgae.nativeElement.style.color = 'yellow';
    }
    else if (this.getKeywordService.percentage < 60) {
      this.percentageMessgae.nativeElement.style.color = 'red';
    }
    else {
      this.percentageMessgae.nativeElement.style.color = 'Green';

    }
  }

}
