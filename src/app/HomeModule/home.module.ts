import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import {ArticleListComponent} from "./article-list/article-list.component";
import {TagComponent} from "./tag/tag.component";



@NgModule({
  declarations: [
    ArticleListComponent,
    TagComponent
  ],
  imports: [
    HomeRoutingModule,
  ],
  providers: [],
  exports: [
    TagComponent,
    ArticleListComponent
  ]
})
export class HomeModule { }
