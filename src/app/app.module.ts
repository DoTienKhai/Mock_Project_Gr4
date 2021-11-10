import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< refs/remotes/origin/DungKT3
=======
import { AuthModule } from './AuthModule';
import { JwtInterceptor } from './CoreModule/services/auth-service';
import { HomeModule } from './HomeModule';
import { ProfileModule } from './ProfileModule';
import { SettingsModule } from './SettingModule';
import { ShareModule } from './ShareModule';
>>>>>>> local

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< refs/remotes/origin/DungKT3
    AppRoutingModule
=======
    HttpClientModule,
    ShareModule,
    AuthModule,
    ProfileModule,
    HomeModule,
    SettingsModule,
    AppRoutingModule,
>>>>>>> local
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
