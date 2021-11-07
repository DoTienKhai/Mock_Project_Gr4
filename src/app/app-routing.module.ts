import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './EditorModule/article-detail/article-detail.component';

const routes: Routes = [
  {
    path: 'article-detail', component: ArticleDetailComponent,
    children:[
      { path: 'ariticle-detail', component: ArticleDetailComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
