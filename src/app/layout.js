import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Carbon + Next13',
  description: 'UCC Computer Science Demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
