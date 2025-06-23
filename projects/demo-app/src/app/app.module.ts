import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import {
  DatadogCustomModule,
  LoadingModule,
  LoggerService,
  TrackClickDirective,
} from 'projects/frontend-angular-utils/src/public-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSlideToggleModule,
    TrackClickDirective,
    LoadingModule,
    HttpClientModule,
    DatadogCustomModule.forRoot({
      applicationId: 'APP_ID',
      clientToken: 'TOKEN',
      site: 'datadoghq.com',
      service: 'my-app',
      env: 'production',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 25,
      forwardErrorsToLogs: true,
    }),
  ],
  exports: [MatButtonModule, MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
