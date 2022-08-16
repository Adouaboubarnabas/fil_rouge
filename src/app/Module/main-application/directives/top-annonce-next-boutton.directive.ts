import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTopAnnonceNextBoutton]'
})
export class TopAnnonceNextBouttonDirective {

  constructor(private el: ElementRef) {
    console.log( this.el.nativeElement);
  }
  @HostListener('click')
  nextFunc() {
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName('item');
    elm.append(item[0]);
  }

}
