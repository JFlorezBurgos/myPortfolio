import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpeedDialComponent } from '../../../shared/components/speed-dial/speed-dial.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, SpeedDialComponent, NgClass, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export default class PortfolioComponent {
  projects = [
    {
      title: 'My Portfolio',
      imagen: 'assets/img/projects/portfolio.jpg',
      description: 'My portfolio is a visual representation of my work as a frontend developer, created using Angular, Tailwind, and CSS. Angular provided me with a robust structure to organize my code and manage application logic. I used Tailwind to streamline the design process, leveraging its predefined classes to quickly style the elements of my portfolio. Additionally, I customized the styling using CSS to tailor it to my preferences and create a unique look. The result is an interactive and visually appealing portfolio that showcases my projects and skills in a clear and concise manner.',
      linkGitHub:'https://github.com/JFlorezBurgos/myPortfolio',
      pageLink:'#',
      isExpanded: false
    },
    {
      title: 'CardApp Unicordoba',
      imagen: 'assets/img/projects/cardunicordoba.jpg',
      description: 'This project presents a digital solution for the management of student IDs at the "Universidad de Córdoba", including a mobile application and a web page. The administrative page of the application was created in Angular, highlighting my expertise as a frontend developer. By utilizing a cloud-based architecture, flexibility, scalability, and security in the process are ensured. The goal is to enhance the student experience and optimize institutional efficiency in ID management.',
      linkGitHub:'https://github.com/JFlorezBurgos/card-app-unicordoba',
      pageBook: 'https://repositorio.unicordoba.edu.co/entities/publication/80971971-deca-486f-95d4-260ece2e57e8',
      pageLink: 'https://card-app-unicordoba.netlify.app/',
      isExpanded: false
    },
    {
      title: 'E-commerce',
      imagen: 'assets/img/projects/ecommerce.jpg',
      description: 'Web application developed with Vue.js 3, Vue Router, Vuex, Tailwind CSS, Flowbite, and FontAwesome. It offers an intuitive user experience for exploring products and making purchases. Although simple, the application is responsive and easy to use on different devices.',
      linkGitHub:'https://github.com/JFlorezBurgos/ecommerce-prueba',
      pageLink:'https://jf-ecommerce-prueba.netlify.app/',
      isExpanded: false
    },
    {
      title: 'Spotify Clone',
      imagen: 'assets/img/projects/spotify.jpg',
      description: "This project involved creating a simplified replica of Spotify using HTML, CSS, and JavaScript. The main idea was to design an interface similar to Spotify's to explore how the platform would look and feel. Although the project was basic, it allowed for practice and familiarity with the web technologies used.",
      linkGitHub:'https://github.com/JFlorezBurgos/clone-spotify-jg',
      pageLink:'https://spotify-clone-jg.netlify.app/',
      isExpanded: false
    },

  ];

  toggleExpanded(index: number) {
    this.projects[index].isExpanded = !this.projects[index].isExpanded;
  }

  isTextLong(description: HTMLElement): boolean {
    return description.scrollHeight > description.clientHeight;
  }
}
