import '../styles/globals.css'; // Chemin relatif depuis src/app/ vers src/styles/

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}