import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from 'src/app/shared/components/photo-card/photo-card.component';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { HorizontalCardComponent } from 'src/app/shared/components/horizontal-card/horizontal-card.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, PhotoCardComponent, HorizontalCardComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{
  constructor(private scrollService: ScrollService){}
  experience = [
    {
      title: 'Cisco pvt limited',
      description: 'I work here since 1 year, I am working as software engineer',
      img_source: './../../../assets/images/cisco_logo.webp',
      img_height: '250px',
      width: '363px'
    },
    {
      title: 'GE HealthCare',
      description: 'I work here since 1 year, I am working as software engineer',
      img_source: './../../../assets/images/GE_logo.jpg',
      img_height: '250px',
      width: '363px'
    },
    {
      title: 'IIIT Hyderabad',
      description: 'I work here since 1 year, I am working as software engineer',
      img_source: './../../../assets/images/iiith_logo.jpeg',
      img_height: '250px',
      width: '363px'
    }
  ];
  education = [
    {
      title: 'National Institute of Technology Karnataka',
      description: 'I work here since 1 year, I am working as software engineer',
      img_source: './../../../assets/images/NITK_PNG_LOGO.png',
      img_height: '250px',
      width: '363px'
    },
    {
      title: 'GE HealthCare',
      description: 'I work here since 1 year, I am working as software engineer',
      img_source: './../../../assets/images/GE_logo.jpg',
      img_height: '250px',
      width: '363px'
    },
    {
      title: 'IIIT Hyderabad',
      description: 'I work here since 1 year, I am working as software engineer',
      img_source: './../../../assets/images/iiith_logo.jpeg',
      img_height: '250px',
      width: '363px'
    }
  ];
  ngOnInit(): void {
    this.scrollService.scrolled.emit(1);
  }
}
