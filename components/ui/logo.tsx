import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.png';

export default function Logo() {
  return (
    <Link className="block" href="/" aria-label="InspiredCoders">
      <Image src={LogoImg} height={32} priority alt="InspiredCoders" />
    </Link>
  );
}