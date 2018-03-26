import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }
  public items = [
    { name: "Angular", checked: false, strike: 'none' },
    { name: "React", checked: false, strike: 'none' },
    { name: "Node", checked: false, strike: 'none' }
  ];
  public newItem = '';
  toggleStrike(i){
    if(!this.items[i].checked){
      console.log('if -- > ', this.items[i].checked, this.items[i].strike);
      this.items[i].strike = 'line-through';
    } else {
      console.log('else -- > ', this.items[i].checked, this.items[i].strike);
      this.items[i].strike = 'none';
    }
  }
  addItem(){
    var obj = { name: '', checked: false, strike: 'none'};
    obj.name = this.newItem;
    this.items.unshift(obj);
    this.newItem = '';
  }
  removeDone(){
    this.items = this.items.filter((obj) => {
      return !obj.checked;
    });
  }
  ngOnInit() {
  }
}
