import { Observable } from 'rxjs';

export abstract class InitialCounterInterface {
    abstract counter: Observable<number>;
    abstract setInitialCounter(initialCounter: any): void;
}
