import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit-component',
  imports: [FormsModule],
  templateUrl: './task-edit-component.html',
  styleUrl: './task-edit-component.css',
})
export class TaskEditComponent {
  clicked: boolean = false;
  newTask: taskModel = {title: '', description: '', dueDate: '', status: ''}
  Clicked(){
    this.clicked = true;
  }
}
