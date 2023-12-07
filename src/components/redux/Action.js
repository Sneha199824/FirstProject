import {Add_To_Cart} from './Constant';
export const AddToCart =(item)=>{
    return{
        type: Add_To_Cart,
        payload:item
    }
}