import { Component } from '@angular/core';
import { albums } from '../albums/albums';


@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent {
  album=albums;
  //this.router.navigate(['/albums'])
}
