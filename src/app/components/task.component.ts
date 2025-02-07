import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-task',
  standalone: true,
  styleUrl: './task.component.css',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input({ required: true }) userName!: string;
  @Input() taskDetail: any = {};
}
