import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail/article-detail.component';



@NgModule({
  declarations: [
    ArticleDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ArticleDetailComponent
  ]
})
export class EditorModule { }
