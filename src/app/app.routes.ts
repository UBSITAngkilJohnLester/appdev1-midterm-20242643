import { Routes } from '@angular/router';
import { TaskListComponent } from './Components/task-list-component/task-list-component';
import { TaskEditComponent } from './Components/task-edit-component/task-edit-component';
import { TaskAddComponent } from './Components/task-add-component/task-add-component';
import { TaskInfoComponent } from './Components/task-info-component/task-info-component';

export const routes: Routes = [
    {path: 'Task', component: TaskListComponent},
    {path: 'Edit', component: TaskEditComponent},
    {path: 'Add', component: TaskAddComponent},
    {path: 'Info', component: TaskInfoComponent},
    
];
