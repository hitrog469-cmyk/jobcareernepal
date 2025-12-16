export default function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`chip ${className}`}>
      {children}
    </span>
  );
}
