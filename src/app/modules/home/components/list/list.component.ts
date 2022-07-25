import { Component, DoCheck } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorate();
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
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

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja Deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorate() {
    if (this.taskList) {
      localStorage.setItem("list", JSON.stringify(this.taskList));
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    }
  }
}
