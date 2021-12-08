import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CubeComponent } from './components/cube/cube.component';
import { BubbleMenuComponent } from './components/menu/bubble-menu/bubble-menu.component';

const routes: Routes = [
  { path: 'css/menu/bubble'       , component: BubbleMenuComponent},
  { path: 'css/cube'              , component: CubeComponent },
  { path: '**'              , component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
