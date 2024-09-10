import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule,],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [AppService]
})
export class ProductListComponent {
  constructor(
    private appService: AppService) { }
  products: any[] = [];
  ngOnInit(): void {
    this.appService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });

  }



  delecteProduct(id: number) {
    this.appService.deleteProduct(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();

    });
  }
}
