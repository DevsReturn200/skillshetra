// Importing Packages //

// Importing Types //
import { ClassNameType } from "@/common/types/reactTypes";

// Exporting Default function Header //
export default async function Header({ className }: { className?: ClassNameType }) {
    return (
        <header className={className} style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, .15)" }}>
            <div>Logo</div>
            <nav>Naviagtion</nav>
        </header>
    )
}