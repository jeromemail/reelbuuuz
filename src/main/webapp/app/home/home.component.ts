import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [NgbCarouselConfig],

})
export class HomeComponent {

  images = [
    { "src": "content/images/1.jpg", "title": "BROADCASTS IDEAS", "innerSrc":"content/images/sec1-img.png" },
    { "src": "content/images/2.jpg", "title": "CREATE PROJECTS", "innerSrc":"content/images/sec2-img.png" },
    { "src": "content/images/3.jpg", "title": "CREWSOURCE", "innerSrc":"content/images/sec3-img.png" }];

    public items= [
      {"header":"Heading 1", "infoMsg":"Message1", "positions":5, "cast":10, "crew":2, "imgSrc":"content/images/1.jpg"},
      {"header":"Heading 2", "infoMsg":"Message2", "positions":5, "cast":10, "crew":2, "imgSrc":"content/images/2.jpg"},
      {"header":"Heading 3", "infoMsg":"Message3", "positions":5, "cast":10, "crew":2, "imgSrc":"content/images/3.jpg"},
      {"header":"Heading 4", "infoMsg":"Message4", "positions":5, "cast":10, "crew":2, "imgSrc":"content/images/1.jpg"},
      {"header":"Heading 5", "infoMsg":"Message5", "positions":5, "cast":10, "crew":2, "imgSrc":"content/images/2.jpg"}
    ];
//  constructor() { }
//
//  ngOnInit(): void {
//  }

}
