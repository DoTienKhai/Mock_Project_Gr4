import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { TagListComponent } from './tag-list/tag-list.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

 
@NgModule({
  declarations: [
    TagListComponent,
    ArticlesListComponent
  ],
  imports: [
    HomeRoutingModule,
  ],
  providers: [],
})
export class HomeModule { }