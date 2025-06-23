import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private loggerService: LoggerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: unknown) => {
        if (error instanceof HttpErrorResponse) {
          const logMessage = `[HTTP ${error.status}] Erro em ${req.method} ${req.url}`;
          this.loggerService.error(logMessage, error);
        } else {
          this.loggerService.error('Erro desconhecido em requisição HTTP', error);
        }

        return throwError(() => error);
      })
    );
  }
}
