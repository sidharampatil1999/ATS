import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {


  @ViewChild('tempRef') form: NgForm;
  @ViewChild('messageToUser') finalMessage: ElementRef;

  constructor(private http: HttpClient) {
  }
  messgeToUser: string = "*All fields are compulsory."

  Submit() {
    var templateParams = {
      name: this.form.value.Name,
      email: this.form.value.Email,
      Message: this.form.value.Message,
    };
    if (this.form.valid) {
      this.messgeToUser = "Message successfully sent.";
      this.finalMessage.nativeElement.style.color = 'Green';
      this.http.post('https://newfireprj-default-rtdb.firebaseio.com/test.json', templateParams).subscribe(val => {
        console.log(val);
      })
    }
    else {
      console.log(this.form.controls['Name'].valid);
      if (!this.form.controls['Name'].valid) {
        this.messgeToUser = "Please check 'Name' field.";
      }
      else if (!this.form.controls['Email'].valid) {
        this.messgeToUser = "Please check 'Email' field.";
      }
      else if (!this.form.controls['Message'].valid) {
        this.messgeToUser = "Please check 'Message' field.";
      }
      this.finalMessage.nativeElement.style.color = 'Red';
    }
    console.log(this.form.valid);
   

  }
}
