import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Core/Post-Service/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getContent();
  }

  public postContent: Array<any> = [];

  getContent(){
    // return this.postService.getPostByID()
    const id: number = this.route.snapshot.params['id'];

    return this.postService.getPostByID(id).subscribe(response => {
      this.postContent = response;

      console.log(this.postContent);
    });

  }

}
