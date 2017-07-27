import { SMSServiceProvider } from './class/smsservice-provider';
import { AWSSmsService } from './service/aws-sms.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotificationService } from './service/notification.service';
import { Isendable } from './interface/isendable';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotificationService,
    SMSServiceProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
