import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from 'src/app/shared/components/photo-card/photo-card.component';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { HorizontalCardComponent } from 'src/app/shared/components/horizontal-card/horizontal-card.component';
import { ModalComponent } from "../../shared/components/modal/modal.component";

const INIT_MODAL_VALUES = {
  id: '',
  title: '',
  description: '',
  detailed_desc: [],
  img_desc: '',
  img_src: '',
  img_alt: '',
  img_height: '',
  width: '',
  align_side: '',
  date: '',
  tools_used: '',
  bg_color: '',
  code_link: '',
  article_link: '',
  certificate_link: '',
  is_project: false,
}
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
  modalValues = INIT_MODAL_VALUES;
  experience = [
    {
      id: 'cisco',
      title: 'Cisco pvt limited',
      description: 'Working as software engineer from Aug 2023',
      detailed_desc: [
        'Developing and enhancing features for OneDevX, a unified dashboard for internal services and tools at Cisco, using Angular.',
        'Collaborating with cross-functional teams to implement scalable UI components, optimize performance, and improve user experience.',
        'Resolving critical bugs and providing ongoing support to ensure seamless functionality across multiple orgs.',
        'Writing end-to-end tests using Cypress, improving test coverage and maintaining code reliability.',
        'Contributing to efficiency improvements across organizations by streamlining development workflows, saving significant time and effort.',
      ],
      img_desc: 'Sez unit, Cessna Business Park, Kadubeesanahalli village Varthur Hobli Sarjapur Marathalli OR Road Bengaluru Bangalore KA IN 560103.',
      img_src: './../../../assets/images/experience/cisco_logo.webp',
      img_height: '250px',
      width: '363px'
    },
    {
      id: 'ge_healthcare',
      title: 'GE HealthCare',
      description: 'Worked as an summer intern on sso and jwt token',
      detailed_desc: ['Implemented Session ID-based SSO authentication using WSO2 and Apache Tomcat to develop a secure authentication system, enabling users to access multiple services with a single set of credentials. Integrated WSO2 Identity Server for centralized authentication and session management, ensuring seamless user experience and improved security across applications.'],
      img_desc: 'Wipro GE Healthcare Pvt. Ltd John F. Welch Technology Centre No.122, EPIP Phase 2, Whitefield Road Bangalore, Karnataka, IN - 560067',
      img_src: './../../../assets/images/experience/GE_logo.jpg',
      img_height: '250px',
      width: '363px'
    },
    {
      id: 'iiit_hyd',
      title: 'IIIT Hyderabad',
      description: 'Worked as summer intern under S Bapi Raju professor',
      detailed_desc: ['In this Internship, I worked under S Bapi Raju professor from IIITH, with the guidance of a Ph.D. scholar Project is building a chess engine using the Reinforcement Learning concepts that think like a human. My work is to fetch the data from lichess using API and clean and analyse it and to plot the data. This work presented at ACCS 8th Annual Conference Of Cognitive Science 2022 (paper id 21)'],
      img_desc: 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032',
      img_src: './../../../assets/images/experience/iiith_logo.jpeg',
      img_height: '250px',
      width: '363px'
    }
  ];
  education = {
    box1: [
      {
        title: 'National Institute of Technology Karnataka',
        description: `B.Tech in Information Technology<br/>CGPA : 8.72    <br/> NH 66, Srinivasnagar, Surathkal, Mangalore, Karnataka 575025`,
        img_src: './../../../assets/images/education/NITK_PNG_LOGO.png',
        img_alt: 'NITK LOGO',
        date: '2019 - 2023'
      },
    ],
    box2: [
      {
        title: 'New Vision Juniour College',
        description: `Higher Secondary Graduate<br/>Percentage : 96.4%<br/>Khammam Bypass Rd, Indira Nagar, Indira Nagar Colony, Khammam, Telangana 507002`,
        img_src: './../../../assets/images/education/Newvisionlogo.png',
        img_alt: 'New Vision LOGO',
        date: '2017 - 2019'
      },
      {
        title: 'New Vision the Olympiad School',
        description: `Secondary Education<br/>GPA : 9.8<br/>Khammam Bypass Rd, Indira Nagar, Indira Nagar Colony, Khammam, Telangana 507002`,
        img_src: './../../../assets/images/education/Newvisionlogo.png',
        img_alt: 'New Vision LOGO',
        date: 'Completed in 2017'
      }
    ]
  };
  bg_colors = [
    'background-color: #e8f0fe',
    'background-color: #eaf6f9',
    'background-color: #e6f4ea',
    'background-color: #fce8e6',
    'background-color: #f4f0fc',
    'background-color: #f9f0e8',
    'background-color: #fef7e0',
    'background-color: #eaf6f9',
  ];

  projects = [
    {
      align_side: '',
      bg_color: 'background-color: #e8f0fe',
      title: 'Decentralised Authentication Protocol for Devices & Users to Access Private Network Services Using Blockchain.',
      description: 'In this work, a decentralised approach using blockchain is proposed to check the authenticity of the device/user trying to access the services of the service provider network.',
      detailed_desc: ["With recent advancements in the Internet of things, challenges to secure devices and data related to devices have increased. Adversaries using different threats manage to clone/hack/tamper devices by hacking credentials stored in centralised databases. In this work, a decentralised approach using blockchain is proposed to check the authenticity of the device/user trying to access the services of the service provider network. The proposed method uses public and private blockchain networks and Physical Unclonable Function (PUF) to authenticate the device/user and to store their credentials. The decentralised application runs on Hyperledger Fabric, an open-source platform for building blockchain networks. The proposed protocol is tested and implemented in the physical testbed containing Raspberry Pi and Arduino Mega's."],
      img_src: './../../../assets/images/projects/decentralised_auth.gif',
      img_alt: 'project gif',
      code_link: '',
      certificate_link: '',
      article_link: 'https://ieeexplore.ieee.org/document/10143051',
      tools_used: 'Blockchain, Hyperledger Fabric, Raspberry Pi, Arduino Mega, PUF',
      date: '2022 - 2023'
    },
    {
      align_side: '',
      bg_color: 'background-color: #e8f0fe',
      title: 'Vision-based Hand Gesture Interface for Real-time Computer Operation Control',
      description: 'In this project a user can control his PC using simple and friendly hand gestures.',
      detailed_desc: ['Humans typically perform simple actions with hand gestures. If a computer interprets gestures, then human-computer interaction can be enhanced. This paper proposes hand gesture-based interface for controlling computer operations using deep learning and custom dataset.'],
      img_src: './../../../assets/images/projects/hand_gesture.gif',
      img_alt: 'project gif',
      code_link: 'https://github.com/gosupraneeth/Vision-based-Hand-Gesture-Interface-for-Real-time-Computer-Operation-Control',
      certificate_link: '',
      article_link: 'https://ieeexplore.ieee.org/document/9977948',
      tools_used: 'Deep learning, Hand gesture recognition, Human-Computer Interaction, MediaPipe, PyAutoGUI',
      date: 'Jan - Apr: 2022'
    },
    {
      align_side: '',
      bg_color: 'background-color: #fef7e0',
      title: 'Long Short Term Memory Networks for Lexical Normalization of Tweets',
      description: 'This is a project implementing Deep Learning concepts to convert a non-standard text into a standard text which is more readable and universal in nature.',
      detailed_desc: ['Lexical normalization is converting a non-standard text into a standard text that is more readable and universal. Data obtained from social media sites and tweets often contain much noise and use non-canonical sentence structures such as non-standard abbreviations, skipping of words, spelling errors, etc. Hence such data needs to be appropriately processed before it can be used. The processing can be done by lexical normalization, which reduces randomness and converts the sentence structure to a predefined standard. Hence lexical normalization can help in improving the performance of systems that use user-generated text as inputs. There are several ways to perform lexical normalization, such as dictionary lookups, most frequent replacements, etc. However, We aim to explore the domain of deep learning to find approaches that can be used to normalize texts lexically.)'],
      img_src: './../../../assets/images/projects/lexical_norm.gif',
      img_alt: 'project gif',
      code_link: 'https://github.com/gosupraneeth/Lexical_Normalization',
      certificate_link: '',
      article_link: '',
      tools_used: 'keras, numpy, pandas, matplotlib, tensorflow',
      date: 'Aug - Nov: 2021'
    },
    {
      align_side: '',
      bg_color: 'background-color: #e6f4ea',
      title: 'Traffic-Sign-Predictor',
      description: 'This is a project part of the development of self-driving cars, one of the key challenges in computer vision, allowing these cars to develop an understanding of their environment from digital images using the GTSRB dataset.',
      detailed_desc: ['This is a project part of the development of self-driving cars, one of the key challenges in computer vision, allowing these cars to develop an understanding of their environment from digital images using the GTSRB dataset.'],
      img_src: './../../../assets/images/projects/traffic_sign.gif',
      img_alt: 'project gif',
      code_link: 'https://github.com/gosupraneeth/Traffic-Sign-Predictor',
      certificate_link: '',
      article_link: '',
      tools_used: 'opencv, scikit-learn, tensorflow, gtsrb',
      date: 'Aug - Nov: 2021'
    },
    {
      align_side: '',
      bg_color: 'background-color: #fce8e6',
      title: 'Voice Based OS',
      description: 'This is a project under Operating Systems, where we can access the files, applications, and many more actions using voice commands.',
      detailed_desc: ['Voice Based OS project is about designing a voice control which works like an OS and better than many voice assistants. It can do many tasks which an OS can do and some tasks which the existing voice assistants cannot do. We can even use it to fill a form by our voice. We can communicate with this assistant to search on google or YouTube or anything. We can use it to create, open folders and files, run files, delete folders and file, shutdown. Many things are possible.'],
      img_src: './../../../assets/images/projects/voice_os.gif',
      img_alt: 'project gif',
      code_link: 'https://github.com/gosupraneeth/IT253-OS-Project/tree/master',
      certificate_link: '',
      article_link: '',
      tools_used: 'gTTs, selenium, tkinter',
      date: 'Jan - Apr: 2021'
    },
    {
      align_side: '',
      bg_color: 'background-color: #f4f0fc',
      title: 'Movie Review Application with Chatbot',
      description: 'This is a web application that gives suggestions about movies to the user based on his activity, it also has a chatbot where it suggests movies based on mood he has, language and genre he prefers.',
      detailed_desc: ['This is a web application that gives suggestions about movies to the user based on his activity, it also has a chatbot where it suggests movies based on mood he has, language and genre he prefers.'],
      img_src: './../../../assets/images/projects/movie_review.gif',
      img_alt: 'project gif',
      code_link: 'https://github.com/gosupraneeth/IT254-Project',
      certificate_link: '',
      article_link: '',
      tools_used: 'Django, Rasa',
      date: 'Jan - Apr: 2021'
    },
    {
      align_side: '',
      bg_color: 'background-color: #f9f0e8',
      title: 'Minesweeper',
      description: 'This project is an AI that can play Minesweeper.',
      detailed_desc: ['This project is an AI that can play Minesweeper.'],
      img_src: './../../../assets/images/projects/minesweeper.gif',
      img_alt: 'project gif',
      code_link: 'https://github.com/gosupraneeth/Minesweeper',
      certificate_link: '',
      article_link: '',
      tools_used: 'pygame, python',
      date: 'Aug - Nov: 2020'
    },
    {
      align_side: '',
      bg_color: 'background-color: #eaf6f9',
      title: 'Uno-Morse-Conversie',
      description: 'This project aims to convert the morse code to text and also converts to speech.',
      detailed_desc: ['Morse Code is a secret code which is used by various agents like RAW, Intelligence for transmitting confidential info to their respective offices for safety of country. We can convert their manual process of sending signals through normal machine, manual decoding to a pen type single button(UNO) transmitter, automated decoding conversion(Conversie). Decoding the received signal into audio is our project.'],
      img_src: './../../../assets/images/projects/uno_morse_conversie.gif',
      img_alt: 'project gif',
      code_link: 'https://github.com/gosupraneeth/Uno-Morse-Conversie',
      certificate_link: '',
      article_link: '',
      tools_used: 'K-Means',
      date: 'Aug - Nov: 2020'
    },
  ];
  isArray(value: any) {
    return Array.isArray(value);
  }
  ngOnInit(): void {
    this.scrollService.scrolled.emit(1);
    this.addBgColorAndSide();
  }

  addBgColorAndSide(){
    this.projects.forEach((project, index) => {
      project.bg_color = this.bg_colors[index];
      if(index % 2 === 0){
        project.align_side = 'left';
      }else{  
        project.align_side = 'right';
      }
    }
    );
  }
  onModalClose(){
    this.isModalOpen = false;
    this.modalValues = INIT_MODAL_VALUES;
  }
  onPhotoCardClick(event: any){
    console.log(event);
    this.modalValues.is_project = false;
    this.modalValues = {...this.modalValues, ...event};
    this.isModalOpen = true;
    console.log(this.modalValues);
  }
  onClickingProject(event: any){
    this.modalValues.is_project = true;
    this.modalValues = {...this.modalValues, ...event};
    this.isModalOpen = true;
    console.log(this.modalValues);
  }
}
