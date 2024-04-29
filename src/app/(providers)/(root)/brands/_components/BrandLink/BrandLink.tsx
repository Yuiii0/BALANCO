import Link from "next/link";

interface BrandLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function BrandLink({ href, label, isActive }: BrandLinkProps) {
  return (
    <Link
      href={href}
      className=" data-[active=true]:text-slate-900 sm-max:text-[12px] sm-max:hover:font-medium text-[15px] data-[active=true]:font-bold data-[active=true]:text-[15px] text-slate-800 font-extralight hover:font-medium transition-all"
      data-active={isActive}
    >
      {label}
    </Link>
  );
}

export default BrandLink;
