import { Dayjs } from "dayjs";

export interface DatePickerWithButtonsProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  placeholder: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClear: () => void;
  onOpenPicker: () => void;
  className?: string;
  popupClassName?: string;
}
