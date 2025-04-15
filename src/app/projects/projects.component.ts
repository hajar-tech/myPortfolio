import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports : [CommonModule],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
  {  
  name : 'pomodoro-timer',
  imageUrl : "images/pomodoro.png",
  githubUrl : "https://github.com/hajar-tech/application-task-manager.git",
  },
  {  
    name : 'pomodoro-timer',
    imageUrl : "images/meteo1.jpg",
    githubUrl : "https://github.com/hajar-tech/application-task-manager.git",
  },
    {  
      name : 'pomodoro-timer',
      imageUrl : "images/Construction.jpg",
      githubUrl : "https://github.com/hajar-tech/application-task-manager.git",
      },
      {  
        name : 'pomodoro-timer',
        imageUrl : "images/sportFlow.jpg",
        githubUrl : "https://github.com/hajar-tech/application-task-manager.git",
        },
      
  ];
}



