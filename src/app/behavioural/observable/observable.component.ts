import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Observable Component to App Component!');
  }

  clearMessages(): void {
    this.messageService.clearMessages();
  }

}
