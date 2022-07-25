import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-input-add-itens',
  templateUrl: './list-input-add-itens.component.html',
  styleUrls: ['./list-input-add-itens.component.scss']
})
export class ListInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
