import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const Logo = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex align-middle" ref={ref}>
      <Link href="/" className="mr-[28px]">
        <Image
          src="/assets/bh-logo.png"
          alt="BH Logo"
          width={300}
          height={39}
          unoptimized
          priority
          // className="dark:brightness-0	dark:invert"
        />
      </Link>
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
