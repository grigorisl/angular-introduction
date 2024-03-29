import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Grigoris';

  person = {
    givenName: 'Grigoris',
    surName: 'Liaskos',
    age: 36,
    email: 'grigoris@aueb.gr',
  };
}
