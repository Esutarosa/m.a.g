import type { FC } from 'react';

import { Tooltip } from "@nextui-org/tooltip";

import { siteConfig } from '@/config/site';

import { Button, ButtonWithStatus } from '@/components/primitives/button';

import Link from 'next/link';

import SVG from '@/components/SVG';

import { LOGOUT } from '@/config/icons';

import { signOut } from '@/config/actions/auth';

const AdminSidebar: FC = () => {
  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden flex-col border-r border-border bg-background sm:flex'>
      <nav className='flex flex-col h-full justify-between items-center w-20 gap-4 py-5'>
        <div className='flex flex-col gap-4'>
          {siteConfig.adminSidebarItems.map((item, idx) => {
            const {
              label,
              icon,
              href,
              key,
              color
            } = item;
            return (
              <Tooltip
                key={key}
                content={label}
                placement='right'
                color={idx === 0 ? 'primary' : 'secondary'}
              >
                <Button variant={color} asChild>
                  <Link href={href}>
                    <SVG className='size-4' icon={icon} />
                  </Link>
                </Button>
              </Tooltip>
            )
          })}
        </div>
        <div className='flex flex-col'>
          <ButtonWithStatus
            className='hover:text-destructive-foreground hover:bg-destructive'
            variant='secondary'
            onClick={async () =>
              await signOut()}>
            <SVG className='size-4' icon={LOGOUT} />
          </ButtonWithStatus>
        </div>
      </nav>
    </aside>
  );
}

export default AdminSidebar;