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
      description: 'My portfolio is a visual representation of my work as a frontend developer, created using Angular, Tailwind, and CSS. Angular provided me with a robust structure to organize my code and manage application logic. I used Tailwind to streamline the design process, leveraging its predefined classes to quickly style the elements of my portfolio. Additionally, I customized the styling using CSS to tailor it to my preferences and create a unique look. The result is an interactive and visually appealing portfolio that showcases my projects and skills in a clear and concise manner.',
      linkGitHub:'https://github.com/JFlorezBurgos/myPortfolio',
      pageLink:'#',
      isExpanded: false
    },
    {
      title: 'Spotify Clone',
      description: "This project involved creating a simplified replica of Spotify using HTML, CSS, and JavaScript. The main idea was to design an interface similar to Spotify's to explore how the platform would look and feel. Although the project was basic, it allowed for practice and familiarity with the web technologies used.",
      linkGitHub:'https://github.com/JFlorezBurgos/clone-spotify-jg',
      pageLink:'https://spotify-clone-jg.netlify.app/',
      isExpanded: false
    },
    {
      title: 'Project 3',
      description: 'Description Project 3',
      linkGitHub:'#',
      pageLink:'#',
      isExpanded: false },
    {
      title: 'Project 4',
      description: 'Description Project 3',
      linkGitHub:'#',
      pageLink:'#',
      isExpanded: false },

  ];

  toggleExpanded(index: number) {
    this.projects[index].isExpanded = !this.projects[index].isExpanded;
  }

  isTextLong(description: HTMLElement): boolean {
    return description.scrollHeight > description.clientHeight;
  }
}
