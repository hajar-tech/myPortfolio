import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkilsComponent } from './skils/skils.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
   {
    path : '',
    redirectTo : 'portfolio',
    pathMatch : 'full'
   },
    {
        path : 'portfolio',
        component : PortfolioComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
  
    {
        path : 'skils',
        component : SkilsComponent
    },
    {
        path : 'projects',
        component : ProjectsComponent
    },
      
    {
        path : 'contact',
        component : ContactComponent
    }
    
];
