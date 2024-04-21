import { cn } from '@/lib/utils';

type ContentBlockProps = {
    children: React.ReactNode;
    className?: string;
};

export const ContentBlock = ({ children, className }: ContentBlockProps) => {
    return (
        <div
            className={cn('size-full overflow-hidden rounded-md bg-[#F7F8FA] shadow-sm', className)}
        >
            {children}
        </div>
    );
};
