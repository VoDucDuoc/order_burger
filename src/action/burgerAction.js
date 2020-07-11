export const add = (name) =>{
    return {
        type: 'ADD',
        name,
    }
}
export const sub = (name) =>{
    return {
        type: 'SUB',
        name,
    }
}