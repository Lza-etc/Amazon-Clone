import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NumberonlyDirective } from '../../numberonly.directive';

@Component({
  selector: 'app-nav-bar1',
  standalone: true,
  imports: [
    ReactiveFormsModule,CommonModule,
    NumberonlyDirective],
  templateUrl: './nav-bar1.component.html',
  styleUrl: './nav-bar1.component.scss'
})
export class NavBar1Component {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      category: ['', Validators.required],
      searchText: ['', Validators.required]
    });
  }

  submit() {
  }
}
