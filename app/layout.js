export const metadata = {
  title: "Belajar Deploy Vercel",
  description: "Contoh aplikasi Next.js sederhana untuk belajar deployment ke Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
