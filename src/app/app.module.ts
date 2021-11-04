import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './AppModule/footer/footer.component';
import {AppModuleModule} from "./AppModule/app-module/app-module.module";
import { TagComponent } from './HomeModule/tag/tag.component';
import { LoginComponent } from './HomeModule/login/login.component';
import { SingUpComponent } from './HomeModule/sing-up/sing-up.component';
import { SettingComponent } from './HomeModule/setting/setting.component';
import { ArticleDetailComponent } from './EditorModule/article-detail/article-detail.component';
import { CommentDetailComponent } from './EditorModule/comment-detail/comment-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './AuthModule/signup/signup.component';
import { ArticleListComponent } from './HomeModule/article-list/article-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ListArticleComponent } from './profile/list-article/list-article.component';

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    LoginComponent,
    SingUpComponent,
    SettingComponent,
    ArticleDetailComponent,
    CommentDetailComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    ArticleListComponent,
    ProfileComponent,
    ListArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
