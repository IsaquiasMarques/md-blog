import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeartbeat, faReply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comment-display',
  templateUrl: './comment-display.component.html',
  styleUrls: ['./comment-display.component.css']
})
export class CommentDisplayComponent implements OnInit {

  constructor() { }
  faHeart = faHeart;
  faReply = faReply;
  ngOnInit(): void {
    this.faHeart;
    this.faReply;
  }
}
