import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Tasks } from 'src/app/task';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  tasks:any=[];
  constructor(private adminService: AdminServiceService) { 
    this.adminService.getAllTasks().subscribe({
      next: data=>{
        this.tasks=data;
        console.log(this.tasks)
      },
      error: err=>{console.log(err);
       }
    })
  }

  ngOnInit(): void {
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
}
