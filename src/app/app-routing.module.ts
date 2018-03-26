import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing routing components
import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ToDoComponent } from './to-do/to-do.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanban', component: KanbanComponent },
  { path: 'to-do', component: ToDoComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [HomeComponent, KanbanComponent, ToDoComponent, PageNotFoundComponent];
