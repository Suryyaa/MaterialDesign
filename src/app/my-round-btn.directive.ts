import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyRoundBtn]'
})
export class MyRoundBtnDirective implements AfterViewInit {

  constructor(private element: ElementRef,private rend : Renderer2) {
    console.log(element,'elementRef')
    element.nativeElement.style.backgroundColor = 'red';
    element.nativeElement.style.borderRadius = '50%';
    element.nativeElement.style.width = '100px';
    element.nativeElement.style.height = '100px';
  }
  ngAfterViewInit(): void {

  this.rend.appendChild(this.element,'<span>MyClassStud Good</span>')
}

}
