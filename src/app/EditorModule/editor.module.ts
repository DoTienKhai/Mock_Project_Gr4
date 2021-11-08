import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-detail/article-edit/article-edit.component';




@NgModule({
  declarations: [
    ArticleDetailComponent,
    ArticleEditComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    ArticleDetailComponent,
    ArticleEditComponent
  ]
})
export class EditorModule { }
