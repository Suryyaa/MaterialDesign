import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { BooksDetailComponent } from './components/books-detail/books-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: 'home', component: BooksDetailComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePassComponent },
  { path: 'new-account', component: NewAccountComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component:  PageNotFoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    BooksDetailComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DataService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

}
