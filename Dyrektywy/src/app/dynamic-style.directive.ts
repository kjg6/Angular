import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDynamicStyle]'
})
export class DynamicStyleDirective implements OnChanges {
@Input() appDynamicStyle: string = '';
  constructor(private el :ElementRef,private renderer: Renderer2) { }

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',this.appDynamicStyle);
  }

}
