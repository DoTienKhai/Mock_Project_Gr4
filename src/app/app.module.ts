import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {HomeModule} from "./HomeModule";
import { HomeComponent } from './HomeModule/home.component';
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

    HeaderComponent,
    FooterComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
