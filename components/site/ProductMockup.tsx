import Image from "next/image";

type ProductMockupProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProductMockup({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 72vw, 360px",
}: ProductMockupProps) {
  return (
    <div className={`relative aspect-[9/16] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-contain drop-shadow-[0_28px_80px_rgba(0,0,0,0.72)] ${imageClassName}`}
      />
    </div>
  );
}
