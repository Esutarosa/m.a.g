'use client';

import type { FC } from 'react';
import Panel from '@/components/Panel';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { ContactFormSchema } from './ContactFormSchema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface ContactFormProps { }

const ContactForm: FC<ContactFormProps> = ({ }) => {

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    mode: 'all',
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      title: '',
      link: '',
    },
  })

  return (
    <Panel innerClassName='rounded-none p-4 z-0' outerClassName='p-0'>
      <Form {...form}>
        <form className='w-full space-y-6'>
          <div>
            <h4 className='h4'>Contact editor</h4>
          </div>
          {/* <ContactFormFields/> */}
        </form>
      </Form>
    </Panel>
  );
}

export default ContactForm;