import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'blog', loadChildren: () => import('./Blog/blog-module/blog-module.module').then(m => m.BlogModuleModule) },
  { path: 'blog', loadChildren: () => import('./blog-page/blog-page.module').then(m => m.BlogPageModule) },
  { path: 'post', loadChildren: () => import('./single-post/single-post.module').then(m => m.SinglePostModule) },
  { path: '', redirectTo: '/blog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
