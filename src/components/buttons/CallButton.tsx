
import Link from "next/link";
import { PrimaryButton } from "./PrimaryButton";

export function CallButton() {
  return (
    <PrimaryButton >
      <Link href="/faleconosco" >
        <span>Falar com consultor</span>
      </Link>
    </PrimaryButton>
  )
}