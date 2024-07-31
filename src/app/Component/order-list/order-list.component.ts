import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-order-list',
  standalone:true,
  templateUrl: './order-list.component.html',
  imports:[FormsModule,CommonModule],
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  products= [
    { name: 'Pencil', quantity: 0 },
    { name: 'Eraser', quantity: 0 },
    { name: 'Pens', quantity: 0 }
  ];

  order: Product[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.order = this.orderService.getOrder();
  }

  addToOrder(product: Product) {
    this.orderService.addToOrder(product);
    this.order = this.orderService.getOrder(); // Update the local order
  }

  showOrder() {
    console.log(this.orderService.getOrder());
    
  }

  speakOrder() {
    const orderText = this.order.map(item => `${item.name}: ${item.quantity}`).join(', ');
    const speech = new SpeechSynthesisUtterance(orderText);
    window.speechSynthesis.speak(speech);
  }
}
