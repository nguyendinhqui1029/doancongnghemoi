import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class XemBanDoService{
    private toadobando: any= new Subject();

    public get Laytoadobando() {
        return this.toadobando;
    }

    public Guitoadobando(number) {
        this.toadobando.next(number);
    }
}