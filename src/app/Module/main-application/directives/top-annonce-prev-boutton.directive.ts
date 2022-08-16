import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTopAnnoncePrevBoutton]'
})
export class TopAnnoncePrevBouttonDirective {

  constructor(private el: ElementRef) {}
  @HostListener('click')
  PrevFunc() {
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName('item');
    elm.prepend(item[item.length-1]);
  }
}
