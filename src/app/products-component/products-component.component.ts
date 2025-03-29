import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-products-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-component.component.html',
  styleUrl: './products-component.component.css'
})
export class ProductsComponentComponent {

  products = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `https://picsum.photos/300/200?random=${i + 1}`,
    description: "High-quality item, best in class!"
  }));

}
