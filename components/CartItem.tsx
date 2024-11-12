import { ICartDB } from "../api/cartApi";

export default function CartItem({ cartItem }: { cartItem: ICartDB[] }) {

  function renderCart(){
    if(cartItem){

      return(
        cartItem.map((item: ICartDB) => {
          return (
            <section key={item.name}>
              <h1>{item.name}</h1>
              <span>{item.price}</span>
              <img src = {`../src/public${item.gallery}`}/>
              <span>{item.quantity}</span>
            </section>
          );
        })
      )
    }

    if(!cartItem){
      return <h1>No Items in Cart!</h1>
    }

  }

  return (
    <section>
      {renderCart() ? renderCart() : <h1>Loading...</h1>}
    </section>
  );
}
