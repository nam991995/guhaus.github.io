import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  slides: any[] = new Array(7).fill({id: -1, src: '', title: '', subtitle: ''});

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/image/oasis/004-20230301.jpg',
    };
    this.slides[1] = {
      src: './assets/image/oasis/001-20230301.jpg',
    }
    this.slides[2] = {
      src: './assets/image/theNine/001-20230508-104257.jpg',
    }
    this.slides[3] = {
      src: './assets/image/theNine/003-20230508-104258.jpg',
    }
    this.slides[4] = {
      src: './assets/image/theNine/012-20230508-104300.jpg',
    }
    this.slides[5] = {
      src: './assets/image/grandeurPalace/005-4.jpg',
    }
    this.slides[6] = {
      src: './assets/image/grandeurPalace/006-5.jpg',
    }
  }
}
