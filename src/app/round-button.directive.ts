import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[roundButton]'
})
export class RoundButtonDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.elementRef.nativeElement, 'round-button');
  }

  @HostListener('mouseover')
  onClick() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'round-button');
    this.renderer.addClass(this.elementRef.nativeElement, 'round-button-mouse-hover');
    // Handle the click event
  }

  @HostListener('mouseout')
  onClick2() {
    this.renderer.addClass(this.elementRef.nativeElement, 'round-button');
    this.renderer.removeClass(this.elementRef.nativeElement, 'round-button-mouse-hover');
    // Handle the click event
  }
}
