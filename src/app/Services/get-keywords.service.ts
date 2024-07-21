import { Injectable } from '@angular/core';
import keyword_extractor from 'keyword-extractor';


@Injectable({
  providedIn: 'root'
})
export class GetKeywordsService {
  extraction_result: string[];
  unavailableKeyword: string[] = [];
  percentage: number
  constructor() { }

  generateKeyword(temp: any) {
    this.extraction_result = keyword_extractor.extract(temp, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false

    });
  }

  processKeywords(resumeText: string) {
    let totalKeywordCount = this.extraction_result.length;
    let availableKeywordCount: number = 0;
    for (let i of this.extraction_result) {
      if (!resumeText.toLowerCase().includes(i.toLowerCase())) {
        this.unavailableKeyword.push(i);
      }
      else {
        availableKeywordCount++;
      }
    }
    this.percentage = (availableKeywordCount / totalKeywordCount) * 100;
  }

}
