import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  getmessage(): String {
    return "Hello this is a sample code";
  }
}
