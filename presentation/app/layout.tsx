import { AttractMode } from "./components/attract";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AttractMode idleMs={60000} />
      </body>
    </html>
  );
}