import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Grigoris';

  person0 =  {
       givenName: 'Grigoris',
       surName: 'Liaskos',
       age: 36,
       email: 'grigoris@aueb.gr',
       address: 'Athens, Greece',
  };

  person1 =  {
    givenName: 'John',
    surName: 'Doe',
    age: 40,
    email: 'john@aueb.gr',
    address: 'New York, USA',
  };

}
