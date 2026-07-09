import { DatePicker } from "antd";
import type { DatePickerWithButtonsProps } from "../types/datePicker";

const DatePickerWithButtons = ({
  value,
  onChange,
  placeholder,
  open,
  onOpenChange,
  onClear,
  onOpenPicker,
  className = "custom-datepicker-input",
  popupClassName = "custom-datepicker-popup",
}: DatePickerWithButtonsProps) => {
  return (
    <div className="custom-datepicker-wrapper">
      <DatePicker
        value={value}
        onChange={onChange}
        format="DD_MM_YYYY"
        placeholder={placeholder}
        suffixIcon={null}
        allowClear={false}
        className={className}
        popupClassName={popupClassName}
        open={open}
        onOpenChange={onOpenChange}
      />
      <button className="datepicker-btn datepicker-clear" onClick={onClear}>
        <svg width="22" height="22" fill="currentColor">
          <use href="/sprite.svg#close" />
        </svg>
      </button>
      <button
        className="datepicker-btn datepicker-calendar"
        onClick={onOpenPicker}
      >
        <svg width="22" height="22" fill="currentColor">
          <use href="/sprite.svg#calendar" />
        </svg>
      </button>
    </div>
  );
};

export default DatePickerWithButtons;
