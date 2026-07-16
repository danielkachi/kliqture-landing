type FeatureCardProps = {
  title: string;
  body: string;
  label?: string;
};

export function FeatureCard({ title, body, label }: FeatureCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur md:p-8">
      {label ? (
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-300/80">
          {label}
        </p>
      ) : null}
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/62 md:text-base">
        {body}
      </p>
    </article>
  );
}
