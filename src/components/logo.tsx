import logo from '../../public/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
    return (
        <Link href={'/'}>
            {/* eslint-disable-next-liqne @typescript-eslint/no-unsafe-assignment */}
            <Image src={logo} alt="Petsoft logo" />
        </Link>
    );
};
