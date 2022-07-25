import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realemnte Deletar tudo?");

    if (confirm) {
      this.taskList = [];
    }
  }
}
