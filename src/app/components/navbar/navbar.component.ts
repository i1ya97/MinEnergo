import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor (private dataService: DataService) {}
    ngOnInit(): void {
    }
    inputStart (name: string, event) {
        this.dataService.start = new Date(event.value);
        this.dataService.updateChart.next();
    }
    inputEnd (name: string, event) {
        this.dataService.end = new Date(event.value);
        this.dataService.updateChart.next();
    }
}