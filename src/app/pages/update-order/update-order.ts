import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService, Order } from '../../services/order';

declare var bootstrap: any;

const stateTransitions: { [key: string]: string[] } = {
  'Creado': ['En preparación'],
  'En preparación': ['En transito', 'No entregado'],
  'En transito': ['Entregado', 'No entregado']
};

@Component({
  selector: 'app-update-order',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-order.html',
  styleUrl: './update-order.css'
})
export class UpdateOrder {
  foundOrder: Order | null = null;
  searchMessage: string = '';
  availableStatuses: string[] = [];

  updateForm = new FormGroup({
    newStatus: new FormControl('', Validators.required), 
    comment: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(40)]),
    responsible: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$')])
  });

  constructor(private orderService: OrderService) {}

  onSearch(packageNumberInput: string) {
    this.foundOrder = null;
    this.searchMessage = '';
    this.availableStatuses = []; 
    const packageNumber = parseInt(packageNumberInput, 10);

    if (isNaN(packageNumber)) {
      this.searchMessage = 'Por favor, ingrese un número de paquete válido.';
      return;
    }
    const result = this.orderService.findOrderById(packageNumber);
    if (result) {
      this.foundOrder = result;
      this.availableStatuses = stateTransitions[result.status] || [];
      
      if (this.availableStatuses.length > 0) {
        this.updateForm.controls.newStatus.setValue(this.availableStatuses[0]);
      }
    } else {
      this.searchMessage = `No se encontró ninguna orden con el número de paquete ${packageNumber}.`;
    }
  }

  get uf() { return this.updateForm.controls; }

  onUpdate() {
    if (this.updateForm.invalid || !this.foundOrder) { return; }
    const { newStatus, comment, responsible } = this.updateForm.value;
    this.orderService.updateOrder(
      this.foundOrder.packageNumber,
      newStatus!,
      comment!,
      responsible!
    );

    const modalElement = document.getElementById('updateSuccessModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
    this.foundOrder = null;
  }
}