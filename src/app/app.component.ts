import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { UserComponent } from './components/user.component';
import { TaskComponent } from './components/task.component';
import { DUMMY_USERS } from './components/DUMMY_USERS';
import { dummyTasks } from './components/DUMMY_TASKS';
@Component({
  standalone: true,
  imports: [UserComponent, TaskComponent, NgIf, NgFor],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allUsers = DUMMY_USERS;
  taskDetail: any;
  selectedUserId = '';
  constructor() {
    console.log('all users: ', this.allUsers);
  }
  get userDetail() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUser(userId: string) {
    console.log('SelectedUser id: ', userId);
    this.selectedUserId = userId;
    this.taskDetail = dummyTasks.filter((t) => t.userId == userId)[0];
  }
}
