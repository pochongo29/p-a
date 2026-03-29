/**
 * Reusable section header with consistent premium styling:
 * pre-title tag, main heading, optional subtitle, gold line accent.
 */

interface SectionHeaderProps {
  tag: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  titleAccent,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center observe-fade ${className}`}>
      <span className="shimmer-gold text-[11px] tracking-widest-2xl uppercase font-light">
        {tag}
      </span>
      <h2 className="heading-glow font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100 mt-4 mb-6">
        {title}
        {titleAccent && (
          <>
            <br className="hidden md:block" />
            <span className="shimmer-gold italic"> {titleAccent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-cream-200/75 font-light max-w-lg mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="h-px w-20 bg-gold-500/60 mx-auto mt-8" />
    </div>
  );
}
