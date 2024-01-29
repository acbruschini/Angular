import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNameTitle]'
})
export class NameTitleDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement,"font-size","20px")
  }

}
