// note only error components closest to the route takes priority over the global error component
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <div>Global Error</div>;
}
