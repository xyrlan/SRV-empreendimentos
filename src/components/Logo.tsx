import Image from "next/image";
import Link from "next/link";

const Logo = ({width}: {width: number}) => {
  return (
    <Link href={'/'} className="relative w-fit h-fit">
      <Image src={'/ativo4.svg'} width={width} height={42} alt="logo" className="drop-shadow-xl dark:invisible visible absolute" />
      <Image src={'/ativo4branco.svg'} width={width} height={42} alt="logo" className="drop-shadow-xl invisible dark:visible " />
    </Link>
  )
}

export default Logo