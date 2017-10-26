import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`<div align='center'>
  <ul>
  <li *ngFor="let message of mail.message">{{message.text}}</li>
  </ul>
  <app-simple-form *ngFor="let x of mail.message"
  [message] = "x.text"
  (update)="onChange(x.id, $event.text)"
  >
  </app-simple-form>
  </div>
  `
})
export class AppComponent {
  title = 'app works!';

  //Getting the value of the input field after clicking on the
  //submit button
  onChange(id, text)
  {
    //passing the input field value to the service to take action
    //or use the value to perform option
    this.mail.update(id, text);
  }

  constructor(@Inject('mail') private mail)
  {

  }
}
