import {BackgroundPattern} from "@/components/background-pattern";
import {AppHeader} from "@/components/app-header";
import {AppFooter} from "@/components/app-footer";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <BackgroundPattern/>
            <div className="mx-auto flex min-h-screen max-w-[1050px] flex-col px-4">
                <AppHeader/>
                {children}
                <AppFooter/>
            </div>
        </div>
    );
}
