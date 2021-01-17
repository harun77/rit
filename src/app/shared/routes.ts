import { Routes } from "@angular/router";
import { AboutComponent } from "../component/about/about.component";
import { BlogComponent } from "../component/blog/blog.component";
import { CareerComponent } from "../component/career/career.component";
import { ContactComponent } from "../component/contact/contact.component";
import { HomeComponent } from "../component/home/home.component";
import { ServicesComponent } from "../component/services/services.component";

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'career', component: CareerComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent }
];