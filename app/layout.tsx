import "./globals.css";
import Gaurd from "./guard";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fa">
            <Gaurd>
                <body>{children}</body>
            </Gaurd>
        </html>
    );
}
