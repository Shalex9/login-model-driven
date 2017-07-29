import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  password: string;
  email: string;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { this.buildForm(); }

  buildForm(): void {
      this.loginForm = this.fb.group({
          'name': ['', [
            Validators.required,
            Validators.pattern(/^[(a-zA-Z0-9)]/),
            Validators.minLength(2),
            Validators.maxLength(25)
          ]],
          'surname': ['', [
            Validators.required,
            Validators.pattern(/^[(a-zA-Z0-9)]/),
            Validators.minLength(2),
            Validators.maxLength(25)
          ]],
          'adress': ['', [
            Validators.required,
            Validators.pattern(/^[(a-zA-Z0-9)]/),
            Validators.minLength(2),
            Validators.maxLength(200)
          ]],
          'number': ['', [
            Validators.required,
            Validators.pattern('\[0-9]{9}')
          ]],
          'email': ['', [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)    
          ]]
      });
      this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
      this.onValueChanged();
  }

  onValueChanged(data?: any) {
      if (!this.loginForm) { return; }
      const form = this.loginForm;
      for (const field in this.formErrors) {
          this.formErrors[field] = '';
          const control = form.get(field);
          if (control && !control.valid) {
              const messages = this.validationMessages[field];
              for (const key in control.errors) {
                  this.formErrors[field] += messages[key] + ' ';  
              }
          }
      }
  }

  formErrors = {
      'name': '',
      'surname': '',
      'adress': '',
      'number': '',
      'email': ''
  };
  validationMessages = {
      'name': {
        'required': 'Name is required.',
        'pattern': 'Name failed',
        'minLength': 'More 1 symbol',
        'maxLength': 'Less 25 symbols'
      },
      'surname': {
        'required': 'Surname is required.',
        'pattern': 'Surname failed',
        'minLength': 'More 1 symbol',
        'maxLength': 'Less 25 symbols'
      },
      'adress': {
        'required': 'Adress is required.',
        'pattern': 'Adress failed',
        'minLength': 'More 1 symbol',
        'maxLength': 'Less 200 symbols'     
      },
      'number': {
        'required': 'Number is required.',
        'pattern': 'Number failed'      
      },
      'email': {
        'required': 'Email is required.',
        'pattern': 'Email failed'
      }
  };

}