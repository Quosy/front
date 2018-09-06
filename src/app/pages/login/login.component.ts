import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public recoverForm: FormGroup;
  public remember: boolean;
  public recover: boolean;
  public hover: boolean;
  

  constructor( private router: Router, private fb: FormBuilder, private loginS: LoginService ) {
    this.recover = false;
    this.hover = false;
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username && password) {
      this.remember = true;
      this.loginForm.controls.username.patchValue(username);
      this.loginForm.controls.password.patchValue(password);
    } else {
      this.remember = false;
    }
  }

  handleRemember() {
    if (this.remember) {
      localStorage.clear();
      localStorage.setItem('username', this.loginForm.controls.username.value);
      localStorage.setItem('password', this.loginForm.controls.password.value);
    } else {
      localStorage.clear();
    }
  }

  handleRecover() {
    this.recover = !this.recover;
    this.recoverForm.reset();
  }

  login() {
    if (this.loginForm.valid) {
      this.loginS.login(this.loginForm.value).subscribe( res => {
        console.log(res);
        this.handleRemember();
        this.router.navigateByUrl('/quosy');
      });
    }
  }

  sendRecoverMessage() {
    // TODO send service
    if (this.recoverForm.valid) {
      this.handleRecover();
    }
  }

  triggerAnim() {
    this.hover = !this.hover;
  }

  getErrorMessageEmail() {
    return this.recoverForm.controls.email.hasError('required') ? 'This field is required' :
      this.recoverForm.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageLoginUsername() {
    return this.loginForm.controls.username.hasError('required') ? 'This field is required' : '';
  }

  getErrorMessageLoginPassword() {
    return this.loginForm.controls.password.hasError('required') ? 'This field is required' : '';
  }

}
