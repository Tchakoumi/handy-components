'use client';

import { Components, BottomSheet } from '@tchak/handy-components';

export default function page() {
  return (
    <BottomSheet open closeBottomSheet={() => null} disableSwipeToClose>
      <Components />;
    </BottomSheet>
  );
}
