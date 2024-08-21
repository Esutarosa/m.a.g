import type { FC, RefObject } from 'react';

import { cn } from '@/utils/cn';

interface GridSiteProps {
  containerRef?: RefObject<HTMLDivElement>;
  className?: string;
  contentMain: JSX.Element;
  contentSide?: JSX.Element;
  sideFirstOnMobile?: boolean;
  sideHiddenOnMobile?: boolean;
  contentMainClassName?: string;
  contentSideClassName?: string;
}

const GridSite: FC<GridSiteProps> = ({
  containerRef,
  className,
  contentMain,
  contentSide,
  sideFirstOnMobile,
  sideHiddenOnMobile,
  contentMainClassName,
  contentSideClassName
}) => {
  return (
    <div ref={containerRef} className={cn(
      'grid',
      'grid-cols-1 lg:grid-cols-12',
      'gap-x-4 lg:gap-x-6',
      'gap-y-4',
      className,
    )}>
      <div className={cn(
        'col-span-1 lg:col-span-4',
        sideFirstOnMobile && 'order-2 lg:order-none',
        contentMainClassName
      )}>
        {contentMain}
      </div>
      {contentSide &&
        <div className={cn(
          'col-span-1 lg:col-span-8',
          sideFirstOnMobile && 'order-1 lg:order-none',
          sideHiddenOnMobile && 'hidden lg:block',
          contentSideClassName
        )}>
          {contentSide}
        </div>}
    </div>
  );
}

export default GridSite;