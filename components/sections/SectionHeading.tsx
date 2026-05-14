interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
}

const SectionHeading = ({
  badge,
  title,
  description,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div className={`mx-auto mb-14 max-w-3xl text-center ${className}`}>
      {/* Badge */}
      <div className="mb-4 inline-flex rounded-full bg-[#87c56d1a] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#87c56d]">
        {badge}
      </div>

      {/* Title */}
      <h2 className="text-[48px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#111827] max-md:text-[36px]">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-4 text-[17px] leading-7 text-[#6B7280]">{description}</p>
    </div>
  );
};

export default SectionHeading;
