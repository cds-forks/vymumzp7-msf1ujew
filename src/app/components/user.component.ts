import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() user!: User;
  @Output() select = new EventEmitter();

  constructor() {
    console.log('user avatar received: ', this.user);
  }
  get avatarUrl() {
    return 'assets/user_avatars/' + this.user.avatar;
  }
  onClickUser() {
    this.select.emit(this.user.id);
  }
}
type User = {
  id: string;
  name: string | number;
  avatar: string;
};

interface Person {
  id: string;
  name: string | number;
  avatar: string;
}
interface Person {
  age: number;
}
