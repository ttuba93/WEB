import { Component } from '@angular/core';
import { Album, albums } from './albums';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  album =albums;
  
  share(item: Album){
    window.alert('The product has been shared!');

  }
  remove(album: Album){
    for(let i=0; i<albums.length; i++){
      if(albums[i] == album){
        delete albums[i];
        break;
      }
    }
  }

}
