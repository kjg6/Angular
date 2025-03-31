import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClikedColor]'
})
export class ClikedColorDirective {

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.ElementRef.nativeElement,'backgroundColor','red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.ElementRef.nativeElement,'backgroundColor');
  }

  constructor(private ElementRef:ElementRef,private renderer:Renderer2) { }

}
