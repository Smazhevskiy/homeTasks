import {PeopleType} from "../HW8";


type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }


export const homeWorkReducer = (state: PeopleType [], action: ActionType): PeopleType [] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case "check":
            return state.filter(a => a.age >= action.payload)
        default:
            return state
    }
}


export const sortNameUp = () => ({type: 'sort', payload: 'up'} as const)
export const sortChekAge = () => ({type: 'check', payload: Number} as const)