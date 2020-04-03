export const compose = (...decorators) => Component => decorators.reduce((comp, dec) => dec(comp), Component);
