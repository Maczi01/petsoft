import logo from '../../public/logo.svg'
import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href={"/"}>
            <Image src={logo} alt="Petsoft logo"/>
        </Link>
    );
}