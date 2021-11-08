import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { ArticleDetailComponent } from './EditorModule/article-detail/article-detail.component';
import { ArticleEditComponent } from './EditorModule/article-detail/article-edit/article-edit.component';
import { HomeComponent } from './HomeModule/home.component';

const routes: Routes = [
  {
   path: 'article-detail',
   component: ArticleDetailComponent,
   children: [
    {
      path: 'article-edit',
      component: ArticleEditComponent
    },
   ]
  },
  {
    path: 'abc',
    component: AbcComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
