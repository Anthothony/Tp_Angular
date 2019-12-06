import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ChannelsComponent } from './channels/channels.component';
import {ChatService } from './chat.service';

const Useroutes: Routes = [
  {
    path: 'channels',  component : ChannelsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChannelsComponent
  ],
  imports: [
    RouterModule.forRoot(Useroutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
