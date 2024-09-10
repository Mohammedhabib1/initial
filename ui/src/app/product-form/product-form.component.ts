import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  providers: [AppService]
})
export class ProductFormComponent {
  productForm: FormGroup;
  constructor(
    private appService: AppService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      unit: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      quantity: [''],
      image: ['']
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.appService.postProduct(this.productForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
