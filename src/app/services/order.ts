import { Injectable } from '@angular/core';

export interface UpdateHistory {
  date: Date;
  status: string;
  comment: string;
  responsible: string;
}

export interface Order {
  senderName: string;
  address: string;
  email: string;
  description: string;
  packageNumber: number;
  trackingId: string;
  status: string;
  history: UpdateHistory[]; 
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];

  getOrders(): Order[] { return this.orders; }

  addOrder(order: Order) {
    this.orders.push(order);
    console.log('Orden añadida al servicio. Órdenes actuales:', this.orders);
  }

  findOrderById(packageNumber: number): Order | undefined {
    return this.orders.find(order => order.packageNumber === packageNumber);
  }

  updateOrder(packageNumber: number, newStatus: string, comment: string, responsible: string) {
    const orderToUpdate = this.findOrderById(packageNumber);

    if (orderToUpdate) {
      orderToUpdate.status = newStatus;

      const newHistoryEntry: UpdateHistory = {
        date: new Date(),
        status: newStatus,
        comment: comment,
        responsible: responsible,
      };

      orderToUpdate.history.push(newHistoryEntry);

      console.log('Orden actualizada:', orderToUpdate);
    }
  }

  findOrderByTrackingId(trackingId: string): Order | undefined {
    return this.orders.find(order => order.trackingId === trackingId);
  }
}