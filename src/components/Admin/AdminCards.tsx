import type { FC } from 'react';
import Link from 'next/link';
import Panel from '@/components/Panel';
import { admin_panel } from '@/data/AdminPanel';
import RenderSVG from '@/components/RenderSVG';

const AdminCards: FC = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='h1'>Admin Panel</h1>
      <p className='p max-w-2xl'>Welcome to the Admin Panel! Here, you can: update biographies, handle discographies, post news, and update contact info.</p>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
        {admin_panel.map((item) => (
          <Link href={item.href} key={item.key} className='w-full h-full grid items-stretch justify-items-stretch'>
            <Panel innerClassName='group/panel' hasActiveOnHover>
              <div className='flex flex-col items-center justify-center'>
                <div className='relative w-full aspect-[3/1] flex items-center justify-center bg-transparent overflow-hidden'>
                  <RenderSVG
                    className='size-14'
                    icon={item.icon}
                  />
                </div>
                <h3 className='h3'>{item.name}</h3>
              </div>
            </Panel>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminCards;