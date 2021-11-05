import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TagComponent } from './HomeModule/tag/tag.component';
// import { LoginComponent } from './AuthModule/login/login.component';
// import { SettingComponent } from './AuthModule/setting/setting.component';
// import { ArticleDetailComponent } from './EditorModule/article-detail/article-detail.component';
// import { CommentDetailComponent } from './EditorModule/comment-detail/comment-detail.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { SignupComponent } from './AuthModule/signup/signup.component';
// import { ArticleListComponent } from './HomeModule/article-list/article-list.component';
// import { ProfileComponent } from './ProfileModule/profile.component';
// import { ListArticleComponent } from './ProfileModule/list-article/list-article.component';
import { EditorModule } from './EditorModule/editor.module';

@NgModule({
  declarations: [
    AppComponent,
    // TagComponent,
    // LoginComponent,
    // SignupComponent,
    // SettingComponent,
    // ArticleDetailComponent,
    // CommentDetailComponent,
    // HeaderComponent,
    // FooterComponent,
    // SignupComponent,
    // ArticleListComponent,
    // ProfileComponent,
    // ListArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
