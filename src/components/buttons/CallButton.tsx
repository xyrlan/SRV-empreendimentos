import { PrimaryButton } from "./PrimaryButton";

export function CallButton() {
  return (
    <PrimaryButton >
      <span>Falar com consultor</span>
      <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-slate-700 to-transparent" />
    </PrimaryButton>
  )
}