import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Input() totalAdminUser="";
  @Output() childAdmin= new EventEmitter<string>();
  onCreateAdmin(user:any){
    // console.log(user.value);
    if(user){
      this.childAdmin.emit(user);
    }
    else{
      alert("Please enter user name")
    }
    



  }

}
