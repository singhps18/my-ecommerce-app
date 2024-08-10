import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from '../in-memory-data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: any[] = [];

  constructor(private productService:InMemoryDataService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data.products; // Assuming the response has a 'products' field
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
  
}
