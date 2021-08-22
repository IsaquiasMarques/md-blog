import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePostRoutingModule } from './single-post-routing.module';
import { SinglePostComponent } from './single-post.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostContentComponent } from './center-content/post-content/post-content.component';
import { CommentFormComponent } from './center-content/comment-form/comment-form.component';
import { CommentDisplayComponent } from './center-content/comment-display/comment-display.component';
import { RelatedArticlesComponent } from './center-content/related-articles/related-articles.component';


@NgModule({
  declarations: [
    SinglePostComponent,
    HeaderContentComponent,
    SocialMediaLinksComponent,
    CenterContentComponent,
    PostCategoryComponent,
    PostContentComponent,
    CommentFormComponent,
    CommentDisplayComponent,
    RelatedArticlesComponent,
  ],
  imports: [
    CommonModule,
    SinglePostRoutingModule,
    FontAwesomeModule
  ]
})
export class SinglePostModule { }
