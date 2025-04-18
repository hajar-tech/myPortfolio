import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports : [CommonModule],
  standalone: true,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  MyProjects = [
    {
       name : 'Project 1',
       description : 'Description of project 1'
    },
    {
      name : 'Project 2',
      description : 'Description of project 2'
   },
   {
    name : 'Project 3',
    description : 'Description of project 3'
 }
  ]

}
