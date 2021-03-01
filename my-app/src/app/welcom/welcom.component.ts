import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {
  message='Some Welcome Message'
  name:string
  constructor(private router:ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.message)
    this.name=this.router.snapshot.params['name']
  }

}
