import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[utilsTrackClick]',
  standalone: true
})
export class TrackClickDirective {
  @Input() utilsTrackClick = '';
  @Input('utilsTrackClickDetails') utilsTrackClickDetails = '';

  @HostListener('click')
  onClick(): void {
    console.log(`Evento de clique: ${this.utilsTrackClick} - detalhe: ${this.utilsTrackClickDetails}`);
  }
}
