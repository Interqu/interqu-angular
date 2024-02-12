import { Component, ElementRef, Renderer2, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  fadeElements: HTMLElement[];

  ngAfterViewInit() {
    this.fadeElements = Array.from(this.elRef.nativeElement.getElementsByClassName("fade") as HTMLCollectionOf<HTMLElement>);
    this.fadeInElements();
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  fadeInElements() {
    this.fadeElements.forEach((element, index) => {
      setTimeout(() => {
        this.renderer.addClass(element, "active");
      }, 100 * (index + 1));
    });
  }
}
