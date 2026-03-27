import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-task-edit-component',
  imports: [FormsModule, RouterLink],
  templateUrl: './task-edit-component.html',
  styleUrl: './task-edit-component.css',
})
export class TaskEditComponent {
  newTask: taskModel = {title: '', description: '', dueDate: '', status: '', priority: ''}
  visible: boolean = false;

  Edit(){
    this.visible = true;
  }

  Confirm(){
    this.visible = false;
  }
}
