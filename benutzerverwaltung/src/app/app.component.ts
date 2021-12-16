import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppUser } from './model/app-user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public appUsers: AppUser[] = [
    {
      salutation: 'Herr',
      name: 'Hans',
      surename: 'Zimmer',
      email: 'hans.zimmer@xzy.de',
      age: 21,
    },
    {
      salutation: 'Frau',
      name: 'Margarete',
      surename: 'Zimmer',
      email: 'margarete.zimmer@xzy.de',
      age: 60,
    },
    {
      salutation: 'Frau',
      name: 'Maximiliane',
      surename: 'Musterfrau',
      email: 'maximiliane.musterfrau@xzy.de',
      age: 40,
    },
  ];
  title = 'Benutzerverwaltung';

  public onSubmit(form: NgForm) {
    this.appUsers = [form.value as AppUser, ...this.appUsers];
  }
}
