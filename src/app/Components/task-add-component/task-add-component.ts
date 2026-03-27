import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-add-component',
  imports: [FormsModule],
  templateUrl: './task-add-component.html',
  styleUrl: './task-add-component.css',
})
export class TaskAddComponent {

  //Adding
  clicked: boolean = false;
  newTask: taskModel = {title: '', description: '', dueDate: '', status: '', priority: ''}
  Clicked(){
    this.clicked = true;
  }

}
