'use client';

import UCCHeader from '@/components/UccHeader/UCCHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <UCCHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
