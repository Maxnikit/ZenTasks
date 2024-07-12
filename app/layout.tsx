import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import './globals.css';

export const metadata = {
  title: 'ZenTasks',
  description: 'An Yin and Yang themed To-Do website',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className="bg-zinc-900">
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
