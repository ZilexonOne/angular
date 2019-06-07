import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';


import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { PostsComponent } from './components/posts/posts.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotoComponent } from './components/photo/photo.component';

import { FormsModule } from '@angular/forms';
import { HoverDirective } from './hover.directive';
import { SettingComponent } from './components/setting/setting.component';
import { Setting1Component } from './components/setting1/setting1.component';
import { Setting2Component } from './components/setting2/setting2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    PostsComponent,
    HeaderComponent,
    PhotoComponent,
    HoverDirective,
    SettingComponent,
    Setting1Component,
    Setting2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
