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
      img_source: './../../../assets/images/experience/cisco_logo.webp',
      img_height: '250px',
      width: '363px'
    },
    {
      title: 'GE HealthCare',
      description: 'I work here since 1 year, I am working as software engineer',
      img_source: './../../../assets/images/experience/GE_logo.jpg',
      img_height: '250px',
      width: '363px'
    },
    {
      title: 'IIIT Hyderabad',
      description: 'I work here since 1 year, I am working as software engineer',
      img_source: './../../../assets/images/experience/iiith_logo.jpeg',
      img_height: '250px',
      width: '363px'
    }
  ];
  education = {
    box1: [
      {
        title: 'National Institute of Technology Karnataka',
        description: `B.Tech in Information Technology<br/>CGPA : 8.72    <br/> NH 66, Srinivasnagar, Surathkal, Mangalore, Karnataka 575025`,
        img_source: './../../../assets/images/education/NITK_PNG_LOGO.png',
        img_alt: 'NITK LOGO',
        date: '2019 - 2023'
      },
    ],
    box2: [
      {
        title: 'New Vision Juniour College',
        description: `Higher Secondary Graduate<br/>Percentage : 96.4%<br/>Khammam Bypass Rd, Indira Nagar, Indira Nagar Colony, Khammam, Telangana 507002`,
        img_source: './../../../assets/images/education/Newvisionlogo.png',
        img_alt: 'New Vision LOGO',
        date: '2017 - 2019'
      },
      {
        title: 'New Vision the Olympiad School',
        description: `Secondary Education<br/>GPA : 9.8<br/>Khammam Bypass Rd, Indira Nagar, Indira Nagar Colony, Khammam, Telangana 507002`,
        img_source: './../../../assets/images/education/Newvisionlogo.png',
        img_alt: 'New Vision LOGO',
        date: 'Completed in 2017'
      }
    ]
  };

  projects = [
    {
      align_side: 'left',
      bg_color: 'background-color: #e8f0fe',
      title: 'Vision-based Hand Gesture Interface for Real-time Computer Operation Control',
      description: 'In this project a user can control his PC using simple and friendly hand gestures.',
      img_src: './../../../assets/images/projects/hand_gesture.gif',
      img_alt: 'project gif',
      date: '2019 - 2023'
    },
    {
      align_side: 'right',
      bg_color: 'background-color: #fef7e0',
      title: 'Long Short Term Memory Networks for Lexical Normalization of Tweets',
      description: 'This is a project implementing Deep Learning concepts to convert a non-standard text into a standard text which is more readable and universal in nature.',
      img_src: './../../../assets/images/projects/lexical_norm.gif',
      img_alt: 'project gif',
      date: '2019 - 2023'
    },
    {
      align_side: 'left',
      bg_color: 'background-color: #e6f4ea',
      title: 'Traffic-Sign-Predictor',
      description: 'This is a project part of the development of self-driving cars, one of the key challenges in computer vision, allowing these cars to develop an understanding of their environment from digital images using the GTSRB dataset.',
      img_src: './../../../assets/images/projects/traffic_sign.gif',
      img_alt: 'project gif',
      date: '2019 - 2023'
    },
    {
      align_side: 'right',
      bg_color: 'background-color: #fce8e6',
      title: 'Voice Based OS',
      description: 'This is a project under Operating Systems, where we can access the files, applications, and many more actions using voice commands.',
      img_src: './../../../assets/images/projects/voice_os.gif',
      img_alt: 'project gif',
      date: '2019 - 2023'
    },
  ];
  ngOnInit(): void {
    this.scrollService.scrolled.emit(1);
  }
}
