import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})



export class ProjectsComponent {
  projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack shopping platform built with Angular and Spring Boot.',
      image: 'images/avatar.png',
      link: 'https://github.com/yourusername/ecommerce-app'
    },
    {
      title: 'Task Manager',
      description: 'Manage your daily tasks with this clean and simple productivity app.',
      image: 'assets/projects/taskmanager.jpg',
      link: 'https://github.com/yourusername/task-manager'
    },
    {
      title: 'Fitness Tracker',
      description: 'Track your workouts and progress in this modern fitness app.',
      image: 'assets/projects/fitness.jpg',
      link: 'https://github.com/yourusername/fitness-tracker'
    },
    // add more...
  ];

  filteredProjects = this.projects; // you can add filtering logic if needed
}

