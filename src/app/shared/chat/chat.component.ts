import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  hideChat = false;
  chatText = '';

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
  }

  toggleChat(): void {
    this.hideChat = true;
  }

  closeChatInterface(): void {
    this.hideChat = false;
  }

  submit(): void {
    this.constructChat('ask', this.chatText);
    if (this.chatText) {
      this.chatService.getChat(this.chatText)
      .subscribe((res: any) => {
        this.constructChat('response', res);
      }, err => {
        console.log('chat-err-', err);
      });
    }
  }

  constructChat(type: string, message: any): void {
    const element = document.createElement('li');
    const span = document.createElement('span');
    if (type === 'ask') {
      span.innerHTML = message;
      element.style.textAlign = 'left';
      span.style.background = 'rgb(230 229 229)';
    } else {
      span.innerHTML = message.answer;
      element.style.textAlign = 'right';
      span.style.background = '#007bff';
      span.style.color = '#fff';
    }
    span.style.cssText += 'padding: 8px 30px;margin: 6px 10px;display: inline-block;border-radius: 30px;';
    element.appendChild(span);
    document.getElementById('message-list').appendChild(element);
  }

}
