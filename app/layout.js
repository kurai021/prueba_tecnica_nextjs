import ThemeRegistry from './ThemeRegistry';

export const metadata = {
  title: 'Prueba Técnica',
  description: 'Prueba técnica que consiste en un CRUD con Next.js',
}

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
