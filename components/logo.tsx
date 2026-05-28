import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  inverse?: boolean;
};

export function Logo({ inverse = false }: LogoProps) {
  const image = (
    <Image
      src="/brand/brendas-logo.png"
      alt="Brenda’s Home Services"
      width={733}
      height={330}
      priority
      className="h-12 w-auto sm:h-14"
    />
  );

  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Brenda’s Home Services home"
    >
      {inverse ? (
        <span className="inline-flex items-center rounded-2xl bg-white px-4 py-2 shadow-luxe ring-1 ring-white/40">
          {image}
        </span>
      ) : (
        image
      )}
    </Link>
  );
}
