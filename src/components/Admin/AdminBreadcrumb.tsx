'use client';

import {
  Fragment,
  type FC
} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

interface AdminBreadcrumbProps { className?: string }

const AdminBreadcrumb: FC<AdminBreadcrumbProps> = ({ className }) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);
  return (
    <Breadcrumb className={cn(
      'pl-6 hidden sm:flex',
      className
    )}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='/'>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 && <BreadcrumbSeparator />}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          const linkName = link[0].toUpperCase() + link.slice(1, link.length);
          const isLastPath = pathNames.length === index + 1;
          return (
            <Fragment key={link}>
              <BreadcrumbItem>
                {!isLastPath ? (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{linkName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{linkName}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default AdminBreadcrumb;