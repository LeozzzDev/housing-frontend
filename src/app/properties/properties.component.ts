import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {

  properties: Array<any> = [
    {
      id: '1',
      name: 'Leo House',
      type: 'Family House',
      price: '120.000',
    },
    {
      id: '2',
      name: 'Foo Space',
      type: 'Ville',
      price: '350.000',
    },
    {
      id: '3',
      name: 'Mickey Hole',
      type: 'Shity House',
      price: '2.000',
    },
    {
      id: '4',
      name: 'Bazz House',
      type: 'Big House',
      price: '200.000',
    },
    {
      id: '5',
      name: 'Jack Hole',
      type: 'Shity House',
      price: '2.000',
    },
    {
      id: '6',
      name: 'Pluto House',
      type: 'Big House',
      price: '200.000',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
