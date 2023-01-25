import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Tasks } from 'src/app/task';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-existing-board',
  templateUrl: './existing-board.component.html',
  styleUrls: ['./existing-board.component.css']
})
export class ExistingBoardComponent implements OnInit {
  
  show=false;
  todoForm !:FormGroup;
todo : any = [];
inprogress : Tasks [] = [];
done :Tasks [] = [];
editTask:string='';
task:Tasks=new Tasks();
newTask: Tasks[] = [];
newtask2:any=[];
  constructor(private fb:FormBuilder,private adminService:UserServiceService,private adminService2 : AdminServiceService,private route:Router) {
   
   }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item:['',Validators.required],
      taskId:['',Validators.required],
      description:['',Validators.required],
      priority:['',Validators.required],
    })
    this.task=new Tasks();
    this.editTask='';
    this.newTask = [];
    this.todo=[];
    this.inprogress=[];
    this.done=[];

    // this.getAdminTask();
    this.getTask();
  }
 
  drop(event: CdkDragDrop<Tasks[]>) {
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
  addTaskforUser(){
    this.todo.push({
      taskId: this.todoForm.value.item,
      taskName:this.todoForm.value.item,
      priority:this.todoForm.value.item,
      description:this.todoForm.value.item,
      done: false,
      username: '',
      email: '',
      password: ''
     
    })
  }
  onSubmit(){
    console.log(this.task);
    this.save();
    this.route.navigate(['/exisboard']);
  }
  save(){
    this.adminService.addTask(this.task).subscribe(data=>
      {console.log(data);
        alert("New Task Added Successfully")
         location.reload();
      },
  error=>console.log(error));
    }

  private getAdminTask(){
    this.adminService2.getAllTasks().subscribe(data => {
      this.todo = data;
    });
  }
   getTask() {
    
      this.adminService.getUserTask().subscribe(data => {
        this.todo = data;
     })
  }
addTask(etask:Tasks){
this.adminService.addTask(etask).subscribe(res=>{
this.ngOnInit();
},err=>{
  alert(err);
})
}
 

    updateUserTask(){
      this.task.taskName=this.editTask;
      this.adminService.updateUserTask(this.todo).subscribe(res=>{
        this.ngOnInit();
      },err=>{
        alert("Failed to update");
      })
    }

    deleteFromTask(taskId:string){
      this.adminService.deleteUserTask(taskId).subscribe(
        response => {
                console.log("deleted")
                console.log(response);
                window.location.reload();
              },
              error => {
                console.log("error ")
                console.log(error);
              }
      );
  
    }
    call(etask: Tasks){
      this.task = etask;
      this.editTask = etask.taskName;
    }
    displayForm(){
      this.show=true;
     }
  }
