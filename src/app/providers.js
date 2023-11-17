'use client';

import { Content, Theme } from '@carbon/react';

import UccDemoHeader from '@/components/UccDemoHeader/UccDemoHeader';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <UccDemoHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
