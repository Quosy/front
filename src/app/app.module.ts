import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// App root
import { AppComponent } from './app.component';
import { routing } from './app.routing';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Service
import { LoginService } from './services/login.service';
import { TokenService } from './services/token.service';
import { MessageService } from './services/message.service';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { QuosyComponent } from './pages/quosy/quosy.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuosyComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    LoginService,
    TokenService,
    MessageService
  ],
  entryComponents :[
    SnackBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

