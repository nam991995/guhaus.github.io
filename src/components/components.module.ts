import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main/main.component";
import {RouterModule, Routes} from "@angular/router";
import { ListProjectComponent } from './list-project/list-project.component';
import {
  AlertModule,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from "@coreui/angular";
import { ProjectComponent } from './project/project.component';
import {LightgalleryModule} from "lightgallery/angular";
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'project',
    component: ListProjectComponent,
  },
  {
    path: 'project/:projectName',
    component: ProjectComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [
    MainComponent,
    ListProjectComponent,
    ProjectComponent,
    AboutUsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    AlertModule,
    CarouselControlComponent,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    LightgalleryModule,
    FormsModule,
    ReactiveFormsModule,
  ],

})
export class ComponentsModule {
}
