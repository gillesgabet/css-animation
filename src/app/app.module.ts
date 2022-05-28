import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// APP
import { CubeComponent } from './components/cube/cube.component';
import { BubbleMenuComponent } from './components/menu/bubble-menu/bubble-menu.component';
import { IndexComponent } from './components/index/index.component';
// SHARED
import { MaterialModule } from './shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    BubbleMenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
