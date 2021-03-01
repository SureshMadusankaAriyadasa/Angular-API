import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo{
  constructor(
    public id:number,
    public description :string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent implements OnInit {
  todos : Todo[]
  message : String
        // todos=[
        //   new Todo(1,'Learn to Angular',false,new Date()),
        //   new Todo(2,'Learn to NgRx',false,new Date())
        //   // {id:1,description:'Learn to Angular' },
        //   // {id:2,description:'Learn to NgRx'}
        // ]
  constructor(private todoService:TodoDataService,
    private router:Router ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('suresh').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('suresh',id).subscribe(
      response => {
        console.log(response);
        this.message=`Delete to Todo ${id} Successful!!`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id){
    console.log(`update todo ${id}`)
    this.router.navigate(['todos',id])
  }

}
