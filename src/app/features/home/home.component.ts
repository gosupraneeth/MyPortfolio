import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlineButtonComponent } from 'src/app/shared/components/outline-button/outline-button.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ScrollService } from 'src/app/core/services/scroll.service';

@Component({
  selector: 'app-feature-home',
  standalone: true,
  imports: [CommonModule, OutlineButtonComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private scrollService: ScrollService){}
  @ViewChild('scrollableElement') scrollableElement!: ElementRef;

  ngAfterViewInit() {
    this.scrollableElement.nativeElement.addEventListener('scroll', () => {
      const scrollPosition = this.scrollableElement.nativeElement.scrollTop;
      this.scrollService.scrolled.emit(scrollPosition);
    });
  }
  handleButtonClick(event:any){
    setTimeout(()=>{
      if(event==='about-me'){
        const element = document.getElementById(event);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
      }
    },0)
  }
}
