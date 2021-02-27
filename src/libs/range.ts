export function useRange(to: number): number[]
export function useRange(from: number, to: number): number[]
export function useRange(from: number, to: number, step: number): number[]
export function useRange(from: number, to?: number, step: number = 1) {
  if(!to) {
    to = from
    from = 0
  }

  const container = []
  for(let i = from; i <= to; i+=step) {
    container.push(i)
  }
  return container
}
