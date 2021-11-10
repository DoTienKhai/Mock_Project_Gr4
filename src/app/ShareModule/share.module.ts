import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { PreviewArticleComponent } from './preview-article/preview-article.component';
import { PaginationComponent } from './pagination/pagination.component';

 
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [  
    HeaderComponent, FooterComponent, ListArticleComponent, PreviewArticleComponent, PaginationComponent
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderComponent,
    ListArticleComponent,PreviewArticleComponent

  ]
})
export class ShareModule {
}
 