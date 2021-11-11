import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg';
  image3 = 'https://static3.cbrimages.com/wordpress/wp-content/uploads/spinoff/2015/08/lion-guard2.jpgng generate component page-title';

  constructor() { }

  ngOnInit() {
  }

}