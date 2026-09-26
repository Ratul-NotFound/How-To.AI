import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";

export const metadata: Metadata = {
  title: "How-To.AI - Your Daily Life & Problem Assistant",
  description: "Voice-enabled AI assistant with 2,000+ verified solutions to everyday life problems, legal bureaucracy, car inspections, land checks, food safety, and emergency SOPs.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "How-To.AI",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  // Pinch-zoom is deliberately ALLOWED. Disabling it (userScalable:false,
  // maximumScale:1) is a WCAG 1.4.4 failure and blocks elderly/low-vision
  // users from magnifying the interface. Text scaling is offered through
  // the in-app Accessibility panel instead, but native zoom must stay on.
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}

              // Apply accessibility preferences BEFORE first paint so the
              // page never flashes at the wrong text size / contrast level.
              try {
                var saved = JSON.parse(localStorage.getItem('how_to_a11y') || '{}');
                var r = document.documentElement;
                r.dataset.textScale = saved.textScale || 'normal';
                r.dataset.contrast = saved.contrast || 'normal';
                r.dataset.simple = saved.simpleMode ? 'on' : 'off';
                var noMotion = saved.reduceMotion ||
                  (saved.reduceMotion === undefined &&
                   window.matchMedia('(prefers-reduced-motion: reduce)').matches);
                r.dataset.reduceMotion = noMotion ? 'on' : 'off';
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-500/20 selection:text-blue-500">
        <AccessibilityProvider>{children}</AccessibilityProvider>

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('PWA ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('PWA ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
