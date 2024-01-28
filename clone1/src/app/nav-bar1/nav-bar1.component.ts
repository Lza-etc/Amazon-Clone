import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './nav-bar1.component.html',
  styleUrl: './nav-bar1.component.scss'
})
export class NavBar1Component {
  selectedCategory: string = '';
  searchQuery: string = ''; // Ensure searchQuery is declared here

  constructor() { }
  onSubmit(form: any) {
    // You can access form values and perform actions here
    console.log(form.value);
    // For example, you can send form data to an API, perform validation, etc.
  }
}
