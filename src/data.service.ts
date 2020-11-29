import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class DataService {
    public start;
    public end;
    public updateChart = new Subject();
}
