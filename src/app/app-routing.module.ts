import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestapplicationComponent } from './test/testapplication/testapplication.component';

const routes: Routes = [
  { path: '', component: TestapplicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
