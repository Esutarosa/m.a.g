'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';
import { useFormStatus } from 'react-dom';

type FieldSetType = 'checkbox' | 'email' | 'password' | 'text' | 'textarea';

type AnnotatedTag = {
  value: string,
  annotation?: string,
  annotationAria?: string,
}

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
  inputRef?: React.LegacyRef<HTMLInputElement>
  tagOptions?: AnnotatedTag[]
  accessory?: React.ReactNode
  isModified?: boolean
  required?: boolean
  loading?: boolean
  placeholder?: string
  capitalize?: boolean
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
  inputRef,
  tagOptions,
  accessory,
  isModified,
  required,
  loading,
  placeholder,
  capitalize,
}) => {
  const { pending } = useFormStatus();

  return (
    <div className={cn(
      'space-y-2',
      type === 'checkbox' && 'flex items-center gap-2',
    )}>
      {!hideLabel && (
        <label
          className={cn(
            'flex gap-2 items-center select-none -translate-x-1',
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
          {isModified && !error && (
            <span className='text-muted-foreground font-medium text-lg'>
              *
            </span>
          )}
          {error && (
            <span className='text-destructive'>
              {error}
            </span>
          )}
          {required && (
            <span className='text-muted-foreground'>
              Required
            </span>
          )}
          {loading && (
            <span className='translate-y-0.5'>
              spinner...
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
              cn(Boolean(error) && 'border-destructive'),
              readOnly || pending && 'disabled-select',
            )}
          >
            {selectOptionsDefaultLabel && (
              <option value=''>
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
        ) : tagOptions ? (
          <>
            {/* @ts-ignore */}
            {/* Tags */}
          </>
        ) : type === 'textarea' ? (
          <textarea
            id={id}
            name={id}
            value={value}
            placeholder={placeholder}
            onChange={e => onChange?.(e.target.value)}
            readOnly={readOnly || pending || loading}
            className={cn(
              'w-full h-24 resize-none',
              Boolean(error) && 'error',
            )}
          />
        ) : (
          <input
            ref={inputRef}
            id={id}
            name={id}
            value={value}
            checked={type === 'checkbox' ? value === 'true' : undefined}
            placeholder={placeholder}
            onChange={event => onChange?.(type === 'checkbox'
              ? event.target.value === 'true' ? 'false' : 'true'
              : event.target.value
            )}
            type={type}
            autoComplete='off'
            autoCapitalize={!capitalize ? 'off' : undefined}
            readOnly={readOnly || pending || loading}
            disabled={type === 'checkbox' && (
              readOnly || pending || loading
            )}
            className={cn(
              (
                type === 'text' ||
                type === 'email' ||
                type === 'password'
              ) && 'w-full -translate-x-1',
              type === 'checkbox' && (
                readOnly || pending || loading
              ) && 'opacity-50 cursor-not-allowed',
              Boolean(error) && 'border-destructive',
            )}
          />
        )}
        {accessory && <div>{accessory}</div>}
      </div>
    </div>
  );
}

export default FieldSetWithStatus;