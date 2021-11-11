import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
 favLink = ['http://www.google.com','http://www.yahoo.com']
  constructor() { }

  ngOnInit() {
  }

}
