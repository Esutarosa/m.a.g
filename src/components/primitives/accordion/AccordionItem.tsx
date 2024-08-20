import {
  Children,
  cloneElement,
  ReactElement,
  type FC,
  type Key,
  type PropsWithChildren
} from 'react';

import { useAccordion } from '@/hooks/useAccordion';

import { cn } from '@/utils/cn';

interface AccordionItemProps extends PropsWithChildren {
  value: Key;
  className?: string;
}

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  value,
  className
}) => {
  const { expandedValue, toggleItem } = useAccordion();
  const isExpanded = value === expandedValue;

  return (
    <div className={cn('overflow-hidden', className)}
      {...(isExpanded ? { 'data-expanded': '' } : {})}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<any>, {
          expanded: isExpanded,
          onToggle: () => toggleItem(value),
        })
      )}
    </div>
  );
}

export default AccordionItem;