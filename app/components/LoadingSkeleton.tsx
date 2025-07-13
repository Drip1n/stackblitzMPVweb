type LoadingSkeletonProps = {
    className?: string;
  };

  export default function LoadingSkeleton({ className }: LoadingSkeletonProps) {
    return (
      <div
        className={`bg-zinc-800/50 rounded-lg animate-pulse ${className}`}
      ></div>
    );
  }
  