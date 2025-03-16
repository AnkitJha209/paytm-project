import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white p-6 shadow-lg shadow-gray-900/5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}