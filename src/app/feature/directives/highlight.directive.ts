import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private currentEl: ElementRef;
  constructor(private el: ElementRef) {
    this.currentEl = this.el;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.currentEl.nativeElement.style.color = 'rgb(24, 24, 24)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.currentEl.nativeElement.style.color = 'rgb(170, 170, 170)';
  }
}
