import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cotton-ball',
  templateUrl: './cotton-ball.component.html',
  styleUrls: ['./cotton-ball.component.css']
})
export class CottonBallComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  async onSubmit() {}

}
