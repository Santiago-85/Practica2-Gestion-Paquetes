import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Importa el servicio y la interfaz
import { OrderService, Order } from '../../services/order';

declare var bootstrap: any;

@Component({
  selector: 'app-create-order',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './create-order.html',
  styleUrl: './create-order.css'
})
export class CreateOrder {
  generatedPackageNumber: number | null = null;
  generatedTrackingId: string | null = null;

  constructor(private orderService: OrderService) {}

  orderForm = new FormGroup({
    senderName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$')]),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@(gmail|outlook)\\.com$')]),
    description: new FormControl('', [Validators.required, Validators.minLength(40), Validators.maxLength(120)]),
});
  get f() { return this.orderForm.controls; }
  private generatePackageNumber(): number { return Math.floor(100000 + Math.random() * 900000); }
  private generateTrackingId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  onSubmit() {
    if (this.orderForm.invalid) { return; }

    this.generatedPackageNumber = this.generatePackageNumber();
    this.generatedTrackingId = this.generateTrackingId(12);

    const newOrder: Order = {
      senderName: this.f.senderName.value!,
      address: this.f.address.value!,
      email: this.f.email.value!,
      description: this.f.description.value!,
      packageNumber: this.generatedPackageNumber,
      trackingId: this.generatedTrackingId,
      status: 'Creado',

      history: [{
        date: new Date(),
        status: 'Creado',
        comment: this.f.description.value!, 
        responsible: this.f.senderName.value!
      }]
    };

    this.orderService.addOrder(newOrder);

    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }

    this.orderForm.reset();
  }
}