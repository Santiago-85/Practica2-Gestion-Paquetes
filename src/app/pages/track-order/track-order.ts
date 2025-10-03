import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, Order } from '../../services/order';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-order.html',
  styleUrl: './track-order.css'
})
export class TrackOrder {
  foundOrder: Order | null = null;
  searchMessage: string = '';

  constructor(private orderService: OrderService) {}

  onSearch(trackingIdInput: string) {
    this.foundOrder = null;
    this.searchMessage = '';

    if (!trackingIdInput) {
      this.searchMessage = 'Por favor, ingrese un ID de seguimiento.';
      return;
    }

    const result = this.orderService.findOrderByTrackingId(trackingIdInput);

    if (result) {
      this.foundOrder = result;
    } else {
      this.searchMessage = `No se encontró ninguna orden con el ID de seguimiento "${trackingIdInput}".`;
    }
  }
}