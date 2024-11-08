import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from 'src/app/shared/components/photo-card/photo-card.component';
import { ScrollService } from 'src/app/core/services/scroll.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, PhotoCardComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{
  constructor(private scrollService: ScrollService){}
  ngOnInit(): void {
    this.scrollService.scrolled.emit(1);
  }
}
