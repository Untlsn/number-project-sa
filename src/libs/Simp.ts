export const reverse = (val?: boolean) => !val
export const saveFn = <T extends Function>(fn: T|undefined) => fn ?? (() => {})
