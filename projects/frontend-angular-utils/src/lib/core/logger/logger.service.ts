import { Site } from '@datadog/browser-core/cjs/domain/intakeSites';
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';
import { Injectable } from '@angular/core';

export interface DatadogConfig {
  applicationId: string;
  clientToken: string;
  site: Site;
  service: string;
  env: string;
  sessionSampleRate: number;
  sessionReplaySampleRate: number;
  forwardErrorsToLogs: boolean;
}

export function initMonitoring(config: DatadogConfig) {
  return () => {
    datadogRum.init({
      applicationId: config.applicationId,
      clientToken: config.clientToken,
      site: config.site,
      service: config.service,
      env: config.env,
      sessionSampleRate: config.sessionSampleRate ?? 100,
      sessionReplaySampleRate: config.sessionReplaySampleRate ?? 0,
      trackResources: true,
      trackLongTasks: true,
      trackUserInteractions: true,
      allowedTracingUrls: []
    });
    datadogLogs.init({
      clientToken: config.clientToken,
      site: config.site,
      forwardErrorsToLogs: config.forwardErrorsToLogs ?? true,
      sessionSampleRate: config.sessionSampleRate ?? 100,
    });
  };
}

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(message: string, extra?: any): void {
    console.log('[LOG]', message, extra);
  }

  error(message: string, extra?: any): void {
    console.error('[ERROR]', message, extra);
    console.log('[ERROR LOG]', message, extra);
  }

}

