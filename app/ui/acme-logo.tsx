import Image from "next/image";
import LogoImage from "../../public/logo.jpeg";

export default function AcmeLogo({ classNames }: { classNames: string }) {
  return (
    <div className={classNames}>
      <Image src={LogoImage} width={200} height={200} alt="Landwind Logo" />
    </div>
  );
}
