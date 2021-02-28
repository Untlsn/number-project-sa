import { NumberPartials } from './state'

export type ActionsRes = LocalActions | FullAction

export type MiniType = 'k' | 'h' | 'd' | 'u'
export type FullType = 'CHANGE_K' | 'CHANGE_H' | 'CHANGE_D' | 'CHANGE_U'
export interface LocalActions {
  type: FullType,
  payload: number
}
export interface FullAction {
  type: 'CHANGE_ALL',
  payload: NumberPartials
}



const getFullType = (miniType: MiniType): FullType => {
  const presser: Record<MiniType, FullType> = {
    k: 'CHANGE_K',
    h: 'CHANGE_H',
    d: 'CHANGE_D',
    u: 'CHANGE_U'
  }
  return presser[miniType]
}

export const change = (type: MiniType, payload: number): ActionsRes => ({ type: getFullType(type), payload })
export const changeAll = (payload: NumberPartials) => ({ type: 'CHANGE_ALL', payload })
