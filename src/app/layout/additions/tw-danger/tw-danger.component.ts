import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tw-danger',
  standalone: true,
  imports: [],
  templateUrl: './tw-danger.component.html',
  styleUrl: './tw-danger.component.scss'
})
export class TwDangerComponent {
  @Input() dangerTxt!:string

}
