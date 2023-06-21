import { timer } from './decorators/timer';

class Calculator {
    @timer
    add(a: number, b: number): number {
        return a + b;
    }

    @timer
    addAsync(a: number, b: number) {
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(a + b);
            }, 1000);
        });
    }
}

(async () => {
    const calculator = new Calculator();
    console.log(calculator.add(2, 3));
    console.log(await calculator.addAsync(2, 3));
})();
