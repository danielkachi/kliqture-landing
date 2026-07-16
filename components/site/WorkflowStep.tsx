type WorkflowStepProps = {
  index: number;
  title: string;
  body: string;
};

export function WorkflowStep({ index, title, body }: WorkflowStepProps) {
  return (
    <article className="relative rounded-[24px] border border-white/10 bg-black/50 p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-300/30 bg-teal-300/10 text-sm font-semibold text-teal-200">
        {index}
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-white/62">{body}</p>
    </article>
  );
}
