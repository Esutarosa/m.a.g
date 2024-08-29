import { createContext } from 'react';

import type { DialogContextType } from '@/types';

const DialogContext = createContext<DialogContextType | null>(null);

export default DialogContext;