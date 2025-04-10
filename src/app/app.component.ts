import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Import the NavbarComponent
import { FooterComponent } from './footer/footer.component'; // Import the FooterComponent
import { HomeComponent } from './home/home.component'; // Import the HomeComponent
import { ContactComponent } from './contact/contact.component'; // Import the ContactComponent
import { AboutComponent } from './about/about.component'; // Import the AboutComponent
import { SkilsComponent } from './skils/skils.component';
import { ProjectsComponent } from './projects/projects.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent,HomeComponent,ContactComponent,AboutComponent,SkilsComponent,ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myProtfolio';
}
