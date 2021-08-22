import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Core/Post-Service/post.service';

@Component({
  selector: 'app-graphic-design-articles',
  templateUrl: './graphic-design-articles.component.html',
  styleUrls: ['./graphic-design-articles.component.css']
})
export class GraphicDesignArticlesComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getGraphicDesign();
  }

  public posts: Array<any> = [];

  getGraphicDesign(){
    return this.postService.getGraphicDesignPosts().subscribe(response => {
      this.posts = response;
    });
  }

}
