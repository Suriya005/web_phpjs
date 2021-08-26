import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  constructor() {}

  images: any = [
    {
      id: '1',
      name: 'JavaScript',
      description: '',
    },
    {
      id: '2',
      name: 'HTML',
      description: '',
    },
    {
      id: '3',
      name: 'CSS',
      description: '',
    },
    {
      id: '4',
      name: 'Python',
      description: '',
    },
    {
      id: '5',
      name: 'My SQL',
      description: '',
    },
    {
      id: '6',
      name: 'Java',
      description: '',
    },
    {
      id: '7',
      name: 'Node.js',
      description: '',
    },
    {
      id: '8',
      name: 'TypeScript',
      description: '',
    },
    {
      id: '9',
      name: 'C#',
      description: '',
    },
    {
      id: '10',
      name: 'C++',
      description: '',
    },
    {
      id: '11',
      name: 'PHP',
      description: '',
    },
    {
      id: '12',
      name: 'C',
      description: '',
    },
    {
      id: '13',
      name: 'Go',
      description: '',
    },
    {
      id: '14',
      name: 'Kotlin',
      description: '',
    },
    {
      id: '15',
      name: 'Rust',
      description: '',
    },
    {
      id: '16',
      name: 'Ruby',
      description: '',
    },
    {
      id: '17',
      name: 'Dart',
      description: '',
    },
    {
      id: '18',
      name: 'Assembly',
      description: '',
    },
    {
      id: '19',
      name: 'Swift',
      description: '',
    },
    {
      id: '20',
      name: 'R',
      description: '',
    },
    {
      id: '21',
      name: 'Matlab',
      description: '',
    },
    {
      id: '22',
      name: 'Pascal',
      description: '',
    },
    {
      id: '23',
      name: 'Groovy',
      description: '',
    },
    {
      id: '24',
      name: 'Objective-C',
      description: '',
    },
    {
      id: '25',
      name: 'Scala',
      description: '',
    },
    {
      id: '26',
      name: 'Perl',
      description: '',
    },
    {
      id: '27',
      name: 'Haskell',
      description: '',
    },
    {
      id: '28',
      name: 'Crystal',
      description: '',
    },
    {
      id: '29',
      name: 'COBOL',
      description: '',
    },
    {
      id: '30',
      name: 'lua',
      description: '',
    },
    {
      id: '31',
      name: 'LiveScript',
      description: '',
    },
  ];

  ngOnInit(): void {
    console.log(this.images[0].name);
  }
}
