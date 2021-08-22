import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Core/Post-Service/post.service';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css']
})
export class LatestArticlesComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  public posts: Array<any> = [];

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    return this.postService.getPosts().subscribe(response => {
      this.posts = response;
      // console.log(this.posts);
      // alert(JSON.stringify(this.posts))
    },
    error => {
      console.log(error);
    });
  }
  

}
