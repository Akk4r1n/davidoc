import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocviewerComponent } from './components/docviewer/docviewer.component';

const routes: Routes = [
  { path: "doc/:specifiedPath", component: DocviewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
