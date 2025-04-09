import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Import the NavbarComponent
import { FooterComponent } from './footer/footer.component'; // Import the FooterComponent
import { HomeComponent } from './home/home.component'; // Import the HomeComponent


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myProtfolio';
}
