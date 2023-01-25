import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Tasks } from 'src/app/task';

import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

show=false;
todoForm !:FormGroup;
todo : Tasks [] = [];
inprogress : Tasks [] = [];
done :Tasks [] = [];
editTask:string='';
  constructor(private fb:FormBuilder,private adminService:AdminServiceService,private route:Router) {
    this.adminService.getAllTasks().subscribe({
      next: data=>{
        this.todo=data;
        console.log(this.todo)
      },
      error: err=>{console.log(err);
       }
    })
   }
task:Tasks=new Tasks();
  newTask: Tasks[] = [];
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

addTask(){
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
    this.route.navigate(['/create']);
  }
  save(){
    this.adminService.saveTask(this.task).subscribe(data=>
      {console.log(data);
        alert("New Task Added Successfully")
         location.reload();
      },
  error=>console.log(error));
    }
    private getTask(){
      this.adminService.getAllTasks().subscribe(data => {
        this.todo = data;
      });
    }
   

    updateAdminTask(){
      this.task.taskName=this.editTask;
      this.adminService.updateAdminTask(this.task).subscribe(res=>{
        this.ngOnInit();
      },err=>{
        alert("Failed to update");
      })
    }

    deleteFromTask(taskId:string){
      this.adminService.deleteTaskAdmin(taskId).subscribe(
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
