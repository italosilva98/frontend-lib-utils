import { NgModule } from '@angular/core';
import { LoadingModule } from './loading/loading.module';
import { DatadogCustomModule } from './logger/datadog.module';

@NgModule({
  exports: [LoadingModule, DatadogCustomModule],
})
export class FrontendAngularUtilsModule {}
