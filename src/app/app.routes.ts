import { Routes } from '@angular/router';
import { TaskListComponent } from './Components/task-list-component/task-list-component';
import { TaskEditComponent } from './Components/task-edit-component/task-edit-component';


export const routes: Routes = [
    {path: 'Task', component: TaskListComponent},
    {path: 'TaskEdit', component: TaskEditComponent}
];
