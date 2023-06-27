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
import { SongsComponent } from './components/songs/songs.component';
import {MatCardModule} from '@angular/material/card';
import { CurrentSongComponent } from './components/current-song/current-song.component';
import { RoundButtonDirective } from './round-button.directive';
import { MySideNavComponent } from './components/my-side-nav/my-side-nav.component';
import { MyRoundBtnDirective } from './my-round-btn.directive';
import { AboutComponent } from './rout-components/about/about.component';
import { GalleryComponent } from './rout-components/gallery/gallery.component';
import { ProductsComponent } from './rout-components/products/products.component';
import { UserDetailsComponent } from './rout-components/user-details/user-details.component';
import { UserDashboardComponent } from './rout-components/user-dashboard/user-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { UserAddressComponent } from './rout-components/user-address/user-address.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgSearchComponent } from './img-search/img-search.component';
// import { FirebaseApp } from '../../node_modules/firebase/app';
// import { environment } from '../environments/environment';

// const routes: Routes = [
//   { path: 'home', component: SongsComponent },
//   { path: 'about', component: AboutUsComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'change-password', component: ChangePassComponent },
//   { path: 'new-account', component: NewAccountComponent },
//   { path: 'services', component: ServicesComponent },
//   { path: 'contact', component: ContactsComponent },
//   { path: 'search', component: SearchComponent },
//   { path: '**', component:  PageNotFoundComponent},
// ];
















const route : Routes = [
  // {path:'user', component:  UserDetailsComponent}
  {path:'User', component:  UserDashboardComponent},
  {path:'Address', component:  UserAddressComponent},
  {path:'Search', component:  SearchComponent},
  {path:'Search-Img', component:  ImgSearchComponent},
]





@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    BooksDetailComponent,
    AboutUsComponent,
    SongsComponent,
    CurrentSongComponent,
    RoundButtonDirective,
    MySideNavComponent,
    MyRoundBtnDirective,
    AboutComponent,
    GalleryComponent,
    ProductsComponent,
    UserDetailsComponent,
    UserDashboardComponent,
    UserAddressComponent,
    SearchComponent,
    ImgSearchComponent
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
    RouterModule.forRoot(route),
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule
    // FirebaseApp.initializeApp(environment.firebase)

  ],
  providers: [DataService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

}
