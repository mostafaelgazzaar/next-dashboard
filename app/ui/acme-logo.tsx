import Image from "next/image";

export default function AcmeLogo({ classNames }: { classNames: string }) {
  return (
    <div className={classNames}>
      <Image src="/hero.png" width={200} height={200} alt="Landwind Logo" />
    </div>
  );
}
