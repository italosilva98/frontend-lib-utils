import {
  ModuleWithProviders,
  NgModule,
  ErrorHandler,
  APP_INITIALIZER,
} from '@angular/core';
import { initMonitoring, DatadogConfig, LoggerService } from './logger.service';
import { DatadogErrorHandler } from './logger-error-handler';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';

@NgModule({})
export class DatadogCustomModule {
  static forRoot(config: DatadogConfig): ModuleWithProviders<DatadogCustomModule> {
    return {
      ngModule: DatadogCustomModule,
      providers: [
        { provide: 'DD_CONFIG', useValue: config },
        {
          provide: APP_INITIALIZER,
          useFactory: initMonitoring,
          deps: ['DD_CONFIG'],
          multi: true,
        },
        { provide: ErrorHandler, useClass: DatadogErrorHandler },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true,
        },
        LoggerService
      ],
    };
  }
}
