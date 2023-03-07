import { Component } from '@angular/core';
import { photos } from './photos';

@Component({
  selector: 'app-albums-photos',
  templateUrl: './albums-photos.component.html',
  styleUrls: ['./albums-photos.component.css']
})
export class AlbumsPhotosComponent {
  photo=photos;
  share(a: string) {
    window.open(a);
  }

}
