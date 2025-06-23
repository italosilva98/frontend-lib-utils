import { ErrorHandler, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class DatadogErrorHandler implements ErrorHandler {
  constructor(private loggerService: LoggerService) {}
  handleError(error: any): void {
    const processedError =
      error instanceof Error
        ? error
        : new Error(
            typeof error === 'object' ? JSON.stringify(error) : String(error)
          );

    this.loggerService.error('ErrorHandler captured', processedError);
  }
}
