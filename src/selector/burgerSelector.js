export const tinhTongTien = (state) =>{
    let tongTien = 0;
    for(let index in state.burgerReducer.burger){
        tongTien += state.burgerReducer.burger[index] * state.burgerReducer.menu[index];
    }
    return tongTien;
}