'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';
import { useFormStatus } from 'react-dom';

type FieldSetType = 'checkbox' | 'email' | 'password' | 'text';

interface FieldSetWithStatusProps {
  id: string
  label: string
  value: string
  note?: string
  error?: string
  type?: FieldSetType,
  hideLabel?: boolean
  selectOptions?: { value: string, label: string }[]
  selectOptionsDefaultLabel?: string
  readOnly?: boolean
  onChange?: (value: string) => void
}

const FieldSetWithStatus: FC<FieldSetWithStatusProps> = ({
  id,
  label,
  note,
  error,
  type = 'text',
  hideLabel,
  selectOptions,
  selectOptionsDefaultLabel,
  readOnly,
  onChange,
  value,
}) => {
  const { pending } = useFormStatus();

  return (
    <div className={cn(
      'space-y-1',
      type === 'checkbox' && 'flex items-center gap-2',
    )}>
      {!hideLabel && (
        <label
          className={cn(
            'flex gap-2 items-center select-none',
            type === 'checkbox' && 'order-2 pt-1',
          )}
          htmlFor={id}
        >
          {label}
          {note && !error && (
            <span className='text-muted-foreground'>
              {note}
            </span>
          )}
          {error && (
            <span className='text-destructive'>
              {error}
            </span>
          )}
        </label>
      )}
      <div className='flex gap-2'>
        {selectOptions ? (
          <select
            id={id}
            name={id}
            value={value}
            onChange={event => onChange?.(event.target.value)}
            className={cn(
              'w-full',
              error && 'border-destructive',
              readOnly || pending && 'disabled-select',
            )}
          >
            {selectOptionsDefaultLabel && (
              <option value="">
                {selectOptionsDefaultLabel}
              </option>
            )}
            {selectOptions.map(({ value: optionValue, label: optionLabel }) => (
              <option
                key={optionValue}
                value={optionValue}
              >
                {optionLabel}
              </option>
            ))}
          </select>
        ) : (
          <>
            {/* @ts-ignore */}
            {/* Tags */}
          </>
        )}
      </div>
    </div>
  );
}

export default FieldSetWithStatus;