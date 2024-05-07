import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 200;

  // ElementRef fait référence a l'élément du DOM ou la directive sera rattacher
  constructor(private el: ElementRef) {
    this.setHeihgt(this.defaultHeight)
    this.setBorder(this.initialColor)
  }
  @Input('appBorderCard') borderColor?: string;

  // Modifie l'élément du DOM quand la souris entre sur la carte pokemon
  @HostListener('mouseenter') onMouseEnter() {
      this.setBorder(this.borderColor || this.defaultColor)
  }
  // Modifie l'élément du DOM quand la souris sort de la carte pokemon
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor)
  }

  private setHeihgt(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }
}
