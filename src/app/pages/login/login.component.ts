import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public recoverForm: FormGroup;
  // TO IMPLEMENT public remember: boolean;
  public recover: boolean;
  public hover: boolean;

  constructor(private router: Router, private fb: FormBuilder, private loginS: LoginService, private messageS: MessageService) {
    // TO IMPLEMENT this.recover = false;
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
  }

  // TO IMPLEMENT
  handleRemember() {

  }

  clickOnLink() {
    this.recover = !this.recover;
    this.recoverForm.reset();
  }

  handleRecover() {
    this.messageS.showMessage('Un message sera envoyer si l\'adresse est reconnue');
    this.recover = !this.recover;
    this.recoverForm.reset();
  }

  login() {
    if (this.loginForm.valid) {
      this.loginS.login(this.loginForm.value).subscribe(res => {
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
