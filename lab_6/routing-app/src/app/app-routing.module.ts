import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';
import { AlbumsPhotosComponent } from './albums-photos/albums-photos.component';
import { albums } from './albums/albums';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component:AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  {path:'photos',component:AlbumsPhotosComponent},
  {path:'albums/:id', component:AlbumsDetailComponent}

  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
