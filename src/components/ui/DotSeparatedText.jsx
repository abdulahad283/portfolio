export function DotSeparatedText({ left, right }) {
  return (
    <p className="flex items-center gap-[6px]">
      <span className="text-muted">{left}</span>
      <span className="h-[2px] w-[2px] rounded-full bg-[#8e8e92]" />
      <span className="text-muted">{right}</span>
    </p>
  );
}
