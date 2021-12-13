import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CubeComponent } from './components/cube/cube.component';
import { IndexComponent } from './components/index/index.component';
import { BubbleMenuComponent } from './components/menu/bubble-menu/bubble-menu.component';

const routes: Routes = [
  { path: 'css', component: IndexComponent, children: [
    { path: 'menu/bubble'       , component: BubbleMenuComponent, outlet: 'menu'},
    { path: 'cube'              , component: CubeComponent, outlet: 'content' },
  ]},
  
  { path: 'index'                 , component: IndexComponent },
  { path: '**'                    , redirectTo: 'index', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
