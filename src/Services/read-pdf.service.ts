import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadPdfService {

  private pdfUrl = '/assets/Typescript-theultimateguide.pdf'; // Replace with your PDF URL

  constructor(private http: HttpClient) { }

  getPDF(): Promise<Blob> {
    return this.http.get(this.pdfUrl, { responseType: 'blob' })
      .toPromise();
  }
}
