'use client';

import type { FC, LegacyRef, ReactNode } from 'react';

import type { FieldSetType } from '@/types/TForm';

import { useFormStatus } from 'react-dom';

import Spinner from '@/components/Spinner';

import { cn } from '@/utils/cn';

interface FieldSetWithStatusProps {
  id: string;
  label?: string;
  note?: string;
  error?: string;
  value: string;
  isModified?: boolean;
  onChange?: (value: string) => void;
  selectOptions?: { value: string, label: string }[];
  selectOptionsDefaultLabel?: string;
  placeholder?: string;
  loading?: boolean;
  required?: boolean;
  readOnly?: boolean;
  capitalize?: boolean;
  type?: FieldSetType;
  inputRef?: LegacyRef<HTMLInputElement>;
  accessory?: ReactNode;
  hideLabel?: boolean;
}

const FieldSetWithStatus: FC<FieldSetWithStatusProps> = ({
  id,
  label,
  note,
  error,
  value,
  isModified,
  onChange,
  selectOptions,
  selectOptionsDefaultLabel,
  placeholder,
  loading,
  required,
  readOnly,
  capitalize,
  type = 'text',
  inputRef,
  accessory,
  hideLabel,
}) => {
  const { pending } = useFormStatus();

  return (
    <div className={cn(
      'space-y-1',
      type === 'checkbox' && 'flex items-center gap-2',
    )}>
      {!hideLabel && label &&
        <label htmlFor={id} className={cn(
          'flex gap-2 items-center select-none',
          type === 'checkbox' && 'order-2 pt-[3px]',
        )}>
          {label}
          {note && !error &&
            <span className={cn('text-muted-foreground')}>
              ({note})
            </span>}
          {isModified && !error &&
            <span className={cn('text-sm -ml-1.5 translate-y-[-1px]')}>
              *
            </span>}
          {error &&
            <span className={cn('text-destructive')}>
              {error}
            </span>}
          {required &&
            <span className={cn('text-sm text-muted-foreground')}>
              Required
            </span>}
          {loading &&
            <span className={cn('translate-y-[1.5px]')}>
              <Spinner />
            </span>}
        </label>}
      <div className='flex gap-2'>
        {selectOptions
          ? <select
            id={id}
            name={id}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={cn(
              'w-full',
              cn(Boolean(error) && 'text-destructive'),
              readOnly || pending && 'pointer-events-none',
            )}>
            {selectOptionsDefaultLabel &&
              <option value=''>
                {selectOptionsDefaultLabel}
              </option>}
            {selectOptions.map(({
              value: optionValue,
              label: optionLabel
            }) =>
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>)}
          </select>
          : type === 'textarea'
            ? <textarea
              id={id}
              name={id}
              value={value}
              placeholder={placeholder}
              onChange={(e) => onChange?.(e.target.value)}
              readOnly={readOnly || pending || loading}
              className={cn(
                'w-full h-24 resize-none',
                Boolean(error) && 'text-destructive',
              )}
            />
            : <input
              ref={inputRef}
              id={id}
              name={id}
              value={value}
              checked={type === 'checkbox' ? value === 'true' : undefined}
              placeholder={placeholder}
              onChange={(e) => onChange?.(type === 'checkbox'
                ? e.target.value === 'true' ? 'false' : 'true'
                : e.target.value)}
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
                ) && 'w-full',
                type === 'checkbox' && (
                  readOnly || pending || loading
                ) && 'opacity-50 cursor-not-allowed',
                Boolean(error) && 'text-destructive',
              )}
            />}
        {accessory && <div>
          {accessory}
        </div>}
      </div>
    </div>
  );
}

export default FieldSetWithStatus;