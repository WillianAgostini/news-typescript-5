export function positiveNumber<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) {

    const methodName = String(context.name);
    function replacementMethod(this: This, ...args: Args): Return {
        args.forEach(element => {
            if (typeof element === 'number' && element >= 0)
                throw new Error(`O número fornecido não é válido: ${element}`);
        });
        const result = target.call(this, ...args);
        console.log(`LOG: Exiting method '${methodName}'.`);
        return result;
    }

    return replacementMethod;
}
