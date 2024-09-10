import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.scss',
    imports: [HeaderComponent, FooterComponent,HttpClientModule,CommonModule],
    providers: [AppService]
})
export class ShopComponent {

    constructor(private appService: AppService) { }

    products: any[] = [];

    ngOnInit(): void {
        this.appService.getAllProducts().subscribe((res) => {
            this.products = res;
            console.log(this.products);
        });
    }
}
