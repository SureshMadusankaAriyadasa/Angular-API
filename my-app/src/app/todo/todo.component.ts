import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todo/list-todo.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  todo:Todo
  constructor(private todoService:TodoDataService,
    private router:ActivatedRoute,
    private route:Router) { }

  ngOnInit(){
    this.id=this.router.snapshot.params['id']
    this.todo=new Todo(1,'',false,new Date)
    this.todoService.retriveTodo('suresh',this.id).subscribe(
      data=>this.todo=data
    )
  }

  saveTodo(){
    this.todoService.updateTodo('suresh',this.id,this.todo).subscribe(
      data=>{
        console.log(data)
        this.route.navigate(['todo'])
      }
    )
  }

}
