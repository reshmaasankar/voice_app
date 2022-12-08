import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms-test/forms/forms.component';
import { TemplateDrivenComponent } from './forms-test/template-driven/template-driven.component';

const routes: Routes = [
  {
    path: 'forms-test',
    component: TemplateDrivenComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
