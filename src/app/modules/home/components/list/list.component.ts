import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    { task: "Minha nova Task", checked: true },
    { task: "Minha nova Task 2", checked: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
