import Image from "next/image";
import Link from "next/link";

const Logo = ({ width }: { width: number }) => {
  return (
    <Link href={'/'} className="relative w-fit h-fit">
      <Image src={'/novoativo.svg'} width={width} height={42} alt="Barao & Saraiva" className="drop-shadow-xl" />
    </Link>
  )
}

export default Logo