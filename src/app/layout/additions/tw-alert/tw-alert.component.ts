import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tw-alert',
  standalone: true,
  imports: [],
  templateUrl: './tw-alert.component.html',
  styleUrl: './tw-alert.component.scss'
})
export class TwAlertComponent {

  @Input() alerTxt!:string;

}
