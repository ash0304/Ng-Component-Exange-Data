import { ObservableParentComponent } from './observable-parent/observable-parent.component';
import { ViewChildParentComponent } from './view-child-parent/view-child-parent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputOutputParentComponent } from './input-output-parent/input-output-parent.component';

const routes: Routes = [
  { path: 'input-output', component: InputOutputParentComponent },
  { path: 'viewchild', component: ViewChildParentComponent },
  { path: 'observable', component: ObservableParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
