import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/shared/models/board.model';
import { Column } from 'src/app/shared/models/column.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Casa',[
    new Column('TODO',['todo1','todo2']),
    new Column('DOING',['doing1','doing2']),
    new Column('DONE',['done1','done2']),
  ]);

  ngOnInit(): void {
    console.log(this.board)
  }

  // todo = ['todo1', 'todo2', 'todo3', 'todo4'];
  // doing = ['doing1', 'doing2', 'doing3', 'doing4', 'doing5', 'doing6', 'doing7'];
  // done = ['done1', 'done2', 'done3', 'done4', 'done5', 'done6'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

