import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SkilsComponent } from '../skils/skils.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-portfolio',
  imports: [HomeComponent,AboutComponent,SkilsComponent,ProjectsComponent,ContactComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
