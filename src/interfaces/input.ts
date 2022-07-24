import { Size } from '../types';

export interface Input {
  disabled?: boolean;
  endIcon?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  multiline?: boolean;
  row?: number;
  size?: Size;
  startIcon?: boolean;
  value?: string | number;
}
