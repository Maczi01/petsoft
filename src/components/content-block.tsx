export const ContentBlock = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="size-full overflow-hidden
         rounded-md bg-[#F7F8FA] shadow-sm"
        >
            {children}
        </div>
    );
};