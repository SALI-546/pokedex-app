import Script from 'next/script'; // Importer le composant Script
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Charger le CDN de Tailwind CSS avec le composant Script */}
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="afterInteractive" 
        />
       
      </head>
      <body>{children}</body>
    </html>
  );
}