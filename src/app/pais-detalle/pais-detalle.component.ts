import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.id = routeParams.get('id');
  }
}
