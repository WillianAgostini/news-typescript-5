function showLog(methodName: string, start: number) {
    const end = Date.now();
    console.log(`TIMER: Method '${methodName}' took ${end - start}ms.`);
}

export function timer<This, Args extends any[], Return>(target: (this: This, ...args: Args) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>) {
    const methodName = String(context.name);

    return function replacementMethod(this: This, ...args: Args): Return {
        const start = Date.now();
        const result = target.call(this, ...args);
        if (result instanceof Promise) {
            result.finally(() => {
                showLog(methodName, start);
            });
        } else {
            showLog(methodName, start);
        }
        return result;
    }
}
