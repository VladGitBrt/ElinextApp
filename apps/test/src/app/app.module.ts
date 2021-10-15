import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCard, MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserpageComponent } from './userpage/userpage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    SpinnerComponent,
    UserpageComponent,
    NotfoundComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'user/:id', component: UserpageComponent },
      { path: '**', component: NotfoundComponent },
    ]),

    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
