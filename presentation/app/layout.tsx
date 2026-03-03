

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ background: "#151515" }}>
      <body style={{ background: "#151515" }}>
        {children}
      </body>
    </html>
  );
}