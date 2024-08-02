import type { FC } from 'react';
import Panel from '@/components/Panel';
import { Button } from '@/components/ui/button';
import RenderSVG from '@/components/RenderSVG';
import { Input } from '@/components/ui/input';
import { readContactAdmin } from '@/config/actions/contact';

const ContactTable: FC = async () => {
  const { data: contacts } = await readContactAdmin();

  return (
    <Panel innerClassName='rounded-none p-4' outerClassName='p-0'>
      <div className='flex flex-col items-center gap-4'>
        {contacts?.map((contact, index) => {
          return (
            <div key={index} className='flex gap-4 w-full'>
              <div className='flex flex-col w-full'>
                <h6 className='h6'>Title</h6>
                <p>{contact?.title}</p>
              </div>
              <div className='flex flex-col w-full'>
                <h6 className='h6'>Link</h6>
                <p>{contact?.link}</p>
              </div>
            </div>
          )
        })}
        <Button variant='secondary' size='icon' className='rounded-full'>
          <RenderSVG icon='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z' />
        </Button>
      </div>
    </Panel>
  );
}

export default ContactTable;