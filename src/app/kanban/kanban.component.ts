import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  constructor() {
    // this.state = {
    //   disabled : false
    // };
  }
  public textValue = '';
  isDisabled = false;
  projects = [
      {'id': 1, 'name': 'OMS'},
      {'id': 2, 'name': 'Melissa'},
      {'id': 3, 'name': 'TK-Maxx'},
      {'id': 4, 'name': 'Fed-Ex Bot'}
  ];
  toggleDisabled(event, value){
    if(this.isDisabled){
      console.log('if -- > ', this.isDisabled, event, value);
      this.isDisabled = false;
    } else {
      console.log('else -- > ', this.isDisabled, event, value);
      this.isDisabled = true;
    }
  }

  ngOnInit() {
  }
  test = 'MyTest!';
}
