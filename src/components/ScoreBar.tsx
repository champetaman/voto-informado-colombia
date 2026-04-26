export function ScoreBar({ value }: { value: number }) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-line" aria-label={`${value}%`}>
      <div className="h-full rounded-full bg-leaf" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
