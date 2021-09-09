import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  // Categories ID's:

  // Design Gráfico = 6
  // Dicas = 8
  // Blog Home Banner = 11
  // Mobile = 7
  // Sistemas Web = 9
  // Tecnologia = 10
  // uncategorized = 1

  // allPostsUrl = "http://wordpress.ad/?rest_route=/wp/v2/posts";
  // allPostsUrl = "http://localhost/wordpress/wp-json/wp/v3/posts";

  MobilePostURL = "http://localhost/wordpress/wp-json/wp/v2/posts?categories=7";

  GraphicDesignURL = "http://localhost/wordpress/wp-json/wp/v2/posts?categories=6&per_page=3";

  allPostsUrl = "http://localhost/wordpress/wp-json/wp/v2/posts?per_page=3&per_page=3";

  public singleurl = "";

  getPosts(){
    return this.http.get<any>(this.allPostsUrl);
  }

  getMobilePosts(){
    return this.http.get<any>(this.MobilePostURL);
  }

  getGraphicDesignPosts(){
    return this.http.get<any>(this.GraphicDesignURL);
  }

  getPostByID(id: number){
    this.singleurl = "http://localhost/wordpress/wp-json/wp/v2/posts/"+id;

    return this.http.get<any>(this.singleurl);
  }

}
