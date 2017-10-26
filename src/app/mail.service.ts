import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  message = [
    {id: 0, text:"This is first Message!"},
    {id: 1, text:"Wow this is second Message."},
    {id: 2, text:"This thing is fun!!! This is third message"}
  ];
  constructor() { }

  //getting the values from the component and use that data to perform actions
  update(id, text)
  {
    this.message = this.message.map( m=>
      m.id === id
        ? {id, text}
        : m
    )
  }
}
