import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../interface/project";
import {ListProject} from "../../constants/project-name";
import lgZoom from 'lightgallery/plugins/zoom';
import {LightGallery} from "lightgallery/lightgallery";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private lightGallery!: LightGallery;
  private ListProject = ListProject;
  private needRefresh = false;

  public projectName: string = '';
  public project!: Project;
  public settings = {
    counter: false,
    plugins: [lgZoom],
  };


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.projectName = this.activatedRoute?.snapshot?.paramMap?.get('projectName') || '';
    this.project = this.ListProject?.find(x => x.url?.includes(this.projectName)) as Project;
    this.project?.listImages?.forEach((item, index) => {
      item.id = (Number(index) + 1).toString();
      item.size = '1400-933'
    })
  }

  ngOnInit() {

  }

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }

  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
  };
}
