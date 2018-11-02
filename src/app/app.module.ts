import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { StartComponent } from './components/start/start.component';
import { JoinComponent } from './components/join/join.component';
import { GameComponent } from './components/game/game.component';

const appRoutes: Routes = [
  { path: 'join',       component: JoinComponent  },
  { path: 'start',      component: StartComponent },
  { path: '',           component: MainComponent  },
  { path: 'game/:id',   component: GameComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent,
    JoinComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
