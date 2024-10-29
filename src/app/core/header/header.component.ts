import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-core-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private scrollService: ScrollService) {}
  @Input() isScrolled = false
  ngOnInit() {
    this.scrollService.scrolled.subscribe((scrolled) => {
      this.isScrolled = scrolled > 0;
    });
  }
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.isScrolled = window.scrollY > 0;
  // }
}
