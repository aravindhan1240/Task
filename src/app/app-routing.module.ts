import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenoneComponent } from './component/screenone/screenone.component';
import { ScreentwoComponent } from './component/screentwo/screentwo.component';

const routes: Routes = [
  {path:"",component:ScreenoneComponent},
  {path:"screenone",component:ScreenoneComponent},
  {path:"screentwo",component:ScreentwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
