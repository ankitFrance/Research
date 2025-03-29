import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ProductDetailsComponentComponent } from './product-details-component/product-details-component.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { VideosComponentComponent } from './videos-component/videos-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponentComponent }, 
    { path: 'dashboard', component: DashboardComponentComponent  },
    { path: 'products', component: ProductsComponentComponent  },
    { path: 'products/:id', component: ProductDetailsComponentComponent }, 
    { path: 'news', component: NewsComponentComponent },
    { path: 'videos', component: VideosComponentComponent },
    { path: 'contact', component: ContactComponentComponent  }
];
