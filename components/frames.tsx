import Image from "next/image";

/** A real product screenshot inside a simple phone outline. */
export function PhoneFrame({
  src,
  alt,
  width,
  height,
  priority,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2.25rem] border border-line bg-charcoal p-2.5 shadow-[0_24px_60px_-24px_rgba(35,36,40,0.45)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 768px) 300px, 70vw"
        className="h-auto w-full rounded-[1.75rem] bg-white"
      />
    </div>
  );
}

/** A real product screenshot inside a simple browser window outline. */
export function BrowserFrame({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_60px_-28px_rgba(35,36,40,0.4)]">
      <div className="flex items-center gap-2 border-b border-line bg-paper px-3 py-2" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-xs text-muted">app.choukashi.com</span>
      </div>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 640px, 100vw" className="h-auto w-full" />
    </div>
  );
}
