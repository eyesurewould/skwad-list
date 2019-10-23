import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tracks = [
    {
      title: 'Dolla billz Y\'all',
      artist: 'YungStoopid',
      album: 'Fake bitches',
      progress: 21,
      bufferProgress: 10
    },
    {
      title: 'All my love (4u)',
      artist: 'Not Prince',
      album: 'Sony Ate My Lunch',
      progress: 21,
      bufferProgress: 22
    },
    {
      title: 'Dad emptied the pool',
      artist: 'Sk8Rex',
      album: 'Busted Teeth',
      progress: 25,
      bufferProgress: 41
    },
    {
      title: 'Sad (again)',
      artist: 'Pretntia Absentia',
      album: 'Moods',
      progress: 4,
      bufferProgress: 10
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
