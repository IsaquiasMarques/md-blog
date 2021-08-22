import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Core/Post-Service/post.service';

@Component({
  selector: 'app-mobile-articles',
  templateUrl: './mobile-articles.component.html',
  styleUrls: ['./mobile-articles.component.css']
})
export class MobileArticlesComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  public posts: Array<any> = [];

  ngOnInit(): void {
    this.getMobilePosts();
  }

  getMobilePosts(){
    return this.postService.getMobilePosts().subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }

}
