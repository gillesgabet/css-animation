import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubeComponent } from './components/cube/cube.component';
import { BubbleMenuComponent } from './components/menu/bubble-menu/bubble-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    BubbleMenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
