import styled from "styled-components"
import { BackIcon } from "./icons/back-icon"
import { useRouter } from "next/navigation"

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--secondary-text);
  border: none;
  background: transparent;
  cursor: pointer;
`
interface BtnProps {
  navigate:string
}

export default function BackBtn({navigate}: BtnProps) {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(navigate)
  }
  return(
    <Button onClick={handleNavigate}><BackIcon/> Voltar</Button>
  )
}