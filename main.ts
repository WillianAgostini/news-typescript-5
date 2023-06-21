import { log } from './decorators/log';

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

(() => {
    const calculator = new Calculator();
    console.log(calculator.add(2, 3));
})();

