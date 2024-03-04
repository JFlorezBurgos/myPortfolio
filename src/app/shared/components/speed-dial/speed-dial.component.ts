import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speed-dial',
  standalone: true,
  imports: [NgIf],
  templateUrl: './speed-dial.component.html',
})
export class SpeedDialComponent {
  @Input() githubLink: any;
  @Input() pageLink: any;

}
