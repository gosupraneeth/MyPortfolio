import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from 'src/app/shared/components/photo-card/photo-card.component';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { HorizontalCardComponent } from 'src/app/shared/components/horizontal-card/horizontal-card.component';
import { ModalComponent } from "../../shared/components/modal/modal.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, PhotoCardComponent, HorizontalCardComponent, ModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{
  constructor(private scrollService: ScrollService){}
  isModalOpen = false;
  modalValues = {
    heading: '',
    address: '',
    description: '',
    img_source: '',
    is_project: false,
  }
  experience = [
    {
      id: 'cisco',
      title: 'Cisco pvt limited',
      description: 'I work here since 1 year, I am working as software engineer',
      modal_desc: 'In this Internship, I worked under S Bapi Raju professor from IIITH, with the guidance of a Ph.D. scholar Project is building a chess engine using the Reinforcement Learning concepts that think like a human. My work is to fetch the data from lichess using API and clean and analyse it and to plot the data. This work presented at ACCS 8th Annual Conference Of Cognitive Science 2022 (paper id 21)',
      address: 'Wipro GE Healthcare Pvt. Ltd John F. Welch Technology Centre No.122, EPIP Phase 2, Whitefield Road Bangalore, Karnataka, IN - 560067',
      img_source: './../../../assets/images/experience/cisco_logo.webp',
      img_height: '250px',
      width: '363px'
    },
    {
      id: 'ge_healthcare',
      title: 'GE HealthCare',
      description: 'I work here since 1 year, I am working as software engineer',
      modal_desc: 'In this Internship, I worked under S Bapi Raju professor from IIITH, with the guidance of a Ph.D. scholar Project is building a chess engine using the Reinforcement Learning concepts that think like a human. My work is to fetch the data from lichess using API and clean and analyse it and to plot the data. This work presented at ACCS 8th Annual Conference Of Cognitive Science 2022 (paper id 21)',
      address: 'Wipro GE Healthcare Pvt. Ltd John F. Welch Technology Centre No.122, EPIP Phase 2, Whitefield Road Bangalore, Karnataka, IN - 560067',
      img_source: './../../../assets/images/experience/GE_logo.jpg',
      img_height: '250px',
      width: '363px'
    },
    {
      id: 'iiit_hyd',
      title: 'IIIT Hyderabad',
      description: 'I work here since 1 year, I am working as software engineer',
      modal_desc: 'In this Internship, I worked under S Bapi Raju professor from IIITH, with the guidance of a Ph.D. scholar Project is building a chess engine using the Reinforcement Learning concepts that think like a human. My work is to fetch the data from lichess using API and clean and analyse it and to plot the data. This work presented at ACCS 8th Annual Conference Of Cognitive Science 2022 (paper id 21)',
      address: 'Wipro GE Healthcare Pvt. Ltd John F. Welch Technology Centre No.122, EPIP Phase 2, Whitefield Road Bangalore, Karnataka, IN - 560067',
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
    {
      align_side: 'left',
      bg_color: 'background-color: #f4f0fc',
      title: 'Movie Review Application with Chatbot',
      description: 'This is a web application that gives suggestions about movies to the user based on his activity, it also has a chatbot where it suggests movies based on mood he has, language and genre he prefers.',
      img_src: './../../../assets/images/projects/movie_review.gif',
      img_alt: 'project gif',
      date: '2019 - 2023'
    },
    {
      align_side: 'right',
      bg_color: 'background-color: #f9f0e8',
      title: 'Minesweeper',
      description: 'This project is an AI that can play Minesweeper.',
      img_src: './../../../assets/images/projects/minesweeper.gif',
      img_alt: 'project gif',
      date: '2019 - 2023'
    },
    {
      align_side: 'left',
      bg_color: 'background-color: #eaf6f9',
      title: 'Uno-Morse-Conversie',
      description: 'This project aims to convert the morse code to text and also converts to speech.',
      img_src: './../../../assets/images/projects/uno_morse_conversie.gif',
      img_alt: 'project gif',
      date: '2019 - 2023'
    },
  ];
  ngOnInit(): void {
    this.scrollService.scrolled.emit(1);
  }
  onModalClose(){
    this.isModalOpen = false;
  }
  onPhotoCardClick(event: any){
    console.log(event);
    this.modalValues.is_project = false;
    this.modalValues.heading = event.title;
    this.modalValues.description = event.modal_desc;
    this.modalValues.address = event.address;
    this.modalValues.img_source = event.img_source;
    this.isModalOpen = true;
  }
  onClickingProject(){
    this.modalValues.is_project = true;
    this.isModalOpen = true;
  }
}
