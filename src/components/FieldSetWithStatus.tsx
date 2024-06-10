'use client';

import type { FC } from 'react';
import { useFormStatus } from 'react-dom';

import Spinner from '@/components/Spinner';

interface FieldSetWithStatusProps {
  id: string
  label: string
  type: 'email' | 'password' | 'text'
  name: string
  value?: string
  placeholder?: string
  required: boolean
  hideLabel?: boolean
  loading?: boolean
  selectOptions?: { value: string, label: string }[]
  selectOptionsDefaultLabel?: string
  tagOptions?: { value: string, annotation?: string, annotationAria?: string }[]
  accessory?: React.ReactNode
}

const FieldSetWithStatus: FC<FieldSetWithStatusProps> = ({
  id,
  label,
  name,
  type = 'text',
  value,
  placeholder,
  required,
  hideLabel,
  loading,
  selectOptions,
  selectOptionsDefaultLabel,
  tagOptions,
  accessory,
}) => {
  const { pending } = useFormStatus();

  return (
    <div className='space-y-2'>
      {!hideLabel && (
        <label className='flex gap-2 items-center select-none'>
          {label}
          {loading && <Spinner />}
        </label>
      )}
      <div className='flex gap-2'>
        {selectOptions ? (
          <select>
            {selectOptionsDefaultLabel && (
              <option value=''>
                {selectOptionsDefaultLabel}
              </option>
            )}
          </select>
        ) : tagOptions ? (
          <></>
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            readOnly={pending || loading}
            required={required}
            className='w-full'
          />
        )}
      </div>
    </div>
  );
}

export default FieldSetWithStatus;