import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
tab : string []
  constructor(private ChatService: ChatService) {  }

  ngOnInit() {
  }

  private DisplayChannels() {
    this.ChatService.Rooms().subscribe(
      (channels: string[]) => this.tab = channels
    )
  }
}
