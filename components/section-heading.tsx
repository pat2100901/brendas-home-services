type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, children, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-normal text-plum-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-5 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">{children}</p> : null}
    </div>
  );
}
