import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Data, NavigationStart, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title, private route: Router, private http: HttpClient, ) {
    let currentdate = new Date();
    var timeZ = {
      date: currentdate.toString(),
    };
    http.post('https://newfireprj-default-rtdb.firebaseio.com/test.json', timeZ).subscribe();
  }
  ngOnInit(): void {
    this.titleService.setTitle("ATS");
    this.route.navigateByUrl('Home');
  }
  appDestroyEvent() {
    this.route.navigateByUrl('');
  }

}
