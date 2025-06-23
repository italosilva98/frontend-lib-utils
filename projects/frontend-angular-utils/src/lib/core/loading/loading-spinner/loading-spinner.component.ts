import { Component } from '@angular/core';
import { LoadingService } from '../loading.service';

/**
 * Componente que exibe um spinner de carregamento sobreposto à tela.
 *
 * @selector utils-loading-spinner
 *
 * @description
 * Este componente observa o observable `loading$` do `LoadingService`
 * e exibe um spinner sempre que o valor emitido for `true`.
 * Útil para bloquear a interface durante requisições ou processos demorados.
 *
 * @example
 * ### Modo de uso:
 * <utils-loading-spinner></utils-loading-spinner>

 * ### Service (exemplo de uso do LoadingService):
 * ```ts
 * this.loadingService.setLoading(true);
 *
 * // Após operação:
 * this.loadingService.setLoading(false);
 * ```
 *
 * @see LoadingService
 */
@Component({
  selector: 'utils-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  standalone: false
})
export class LoadingSpinnerComponent {
  /**
   * Injeta o serviço responsável por controlar o estado de carregamento da aplicação.
   * Este serviço expõe um observable `loading$` que controla a visibilidade do spinner.
   */
  constructor(public loadingService: LoadingService) {}
}
