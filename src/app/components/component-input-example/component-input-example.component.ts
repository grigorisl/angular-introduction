import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person =  {
    givenName: 'Grigoris',
    surName: 'Liaskos',
    age: 36,
    email: 'grigoris@aueb.gr',
    address: 'Athens, Greece',
};

person1: Person =  {
 givenName: 'John',
 surName: 'Doe',
 age: 40,
 email: 'john@aueb.gr',
 address: 'New York, USA',
};

}
