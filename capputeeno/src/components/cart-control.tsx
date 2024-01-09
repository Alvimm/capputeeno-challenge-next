import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import {styled} from "styled-components";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
  border-radius: 100%;
  padding: 0 5px;
  font-size: 9px;
  background-color: var(--delete-color);
  color: #fff;
  margin-left: -10px;
  font-family: '__Saira_6b8fcb';
`

const Container = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
`


export function CartControl() {
  const router = useRouter()
  const {value} = useLocalStorage('cart-items', [])
  
  const handleNavigationToCart = () => {
    router.push('/cart')
  }
  return (
    <Container onClick={handleNavigationToCart}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}