import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'
import { ReactNode } from 'react';

export interface CheckboxProps {
  children: ReactNode;
}

export function Checkbox({ }: CheckboxProps) {

  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='w-5 h-5 text-cyan-500' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}