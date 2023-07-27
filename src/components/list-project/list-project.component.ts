import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router  } from "@angular/router";
import {ListProject} from "../../constants/project-name";

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
  public isProjectPage = false
  public projects: any = [
    {
      title: 'Dolphin Plaza',
      imgUrl: './assets/image/theNine/001-20230508-104257.jpg',
      link: '/project/dolphin-plaza',
      type: 'Dự án'
    },
    {
      title: 'The Nine',
      imgUrl: './assets/image/theNine/001-20230508-104257.jpg',
      link: '/project/the-nine',
      type: 'Dự án'
    },
    {
      title: 'Grandeur Palace',
      imgUrl: './assets/image/grandeurPalace/002-3.jpg',
      link: '/project/grandeur-palace',
      type: 'Dự án'
    },
    {
      title: 'Oasis Ecopark - Penhouse',
      imgUrl: './assets/image/oasis/005-20230301.jpg',
      link: '/project/oasis-ecopark-penhouse',
      type: 'Dự án'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isProjectPage = this.router.url.includes('project');
    if (this.isProjectPage) {
      this.projects = ListProject
    }

  }

  ngOnInit() {}

}
