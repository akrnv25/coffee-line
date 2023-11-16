import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyImage]'
})
export class LazyImageDirective implements OnInit {
  @Input() lazySrc: string;

  private defaultSrc = '/assets/default-image.svg';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const supports = 'loading' in HTMLImageElement.prototype;
    if (supports) {
      this.elementRef.nativeElement.setAttribute('loading', 'lazy');
    }
  }

  ngOnChanges(): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'src', this.defaultSrc);
    if (!this.lazySrc) {
      return;
    }
    // todo: timeout is needed only for testing
    setTimeout(() => {
      const img = new Image();
      img.onload = () => this.renderer
        .setAttribute(this.elementRef.nativeElement, 'src', this.lazySrc);
      img.src = this.lazySrc;
    }, 600);
  }
}
