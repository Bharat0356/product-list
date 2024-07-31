import { Injectable } from '@angular/core';

interface Product {
  name: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: Product[] = [];

  addToOrder(product: Product) {
    this.order.push({ ...product });
  }

  getOrder(): Product[] {
    return this.order;
  }

  clearOrder() {
    this.order = [];
  }
}
