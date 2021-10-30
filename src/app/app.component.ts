import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-test';
  public formLogin: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      terms: ['', [Validators.required, Validators.requiredTrue]],
    });
    this.loadApi();
  }

  loadApi(): any {
    const response = {
      email: 'samirrojas42@gmail.com',
      password: '12345678',
      terms: true,
    };

    this.formLogin.patchValue(response);

  }

  send(): any {
    console.log(this.formLogin.value);
  }
}
