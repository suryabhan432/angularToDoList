import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentAdmin:any = [];
  totalAdminCount:any;
  parentAdminfunc(event:any){
    this.parentAdmin.push({
      name:event
    });
    this.totalAdminCount = this.parentAdmin.length;
  }
  
  onRemoveAdmin(item:any){
    this.parentAdmin.splice(item,1);
    this.totalAdminCount = this.parentAdmin.length
  }



  parentUser:any = [];
  totalUserCount:any;
  parentUserFun(event:any){
    this.parentUser.push({
      name:event
    });
    this.totalUserCount = this.parentUser.length;
  }
  onRemoveUser(item:any){
    this.parentUser.splice(item,1)
    this.totalUserCount = this.parentUser.length
  }

}
