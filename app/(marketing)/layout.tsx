import { PropagateToWorkersField } from "next/dist/server/lib/router-utils/types";

interface Props {
    children: React.ReactNode
}

export default function MarketingLayout({ children }: Props) {
    return (
        <div className="h-full bg-slate-100">
            {/* Navbar */}
            <main className="pt-40 pb-20 bg-slate-400">
                {children}
            </main>
            {/* Footer */}
        </div>
    )
}