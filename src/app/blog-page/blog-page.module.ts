import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogPageComponent } from './blog-page.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { MobileArticlesComponent } from './mobile-articles/mobile-articles.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { GraphicDesignArticlesComponent } from './graphic-design-articles/graphic-design-articles.component';


@NgModule({
  declarations: [
    BlogPageComponent,
    HeaderContentComponent,
    LatestArticlesComponent,
    MobileArticlesComponent,
    NewsletterComponent,
    GraphicDesignArticlesComponent
  ],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
  ]
})
export class BlogPageModule { }
