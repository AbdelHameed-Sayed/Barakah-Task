export type TUserDataInCart = {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
};
export type TUserCartData = TUserDataInCart[];

export interface IUserState {
  currency: string;
  cart: TUserCartData;
}

export interface IUserCartAddAction {
  type: string;
  payload: TUserDataInCart;
}
export interface IUserCartRemoveAction {
  type: string;
  payload: TUserDataInCart['id'];
}
