import {
  DatePicker,
  LocalizationProvider,
  AdapterDateFns,
} from "@/app/components/playbook";
import { DatePickerProps } from "@mui/x-date-pickers";

type DatePickerFieldProps = Omit<DatePickerProps<Date>, "renderInput"> & {
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  sx?: any;
};

export function DatePickerField({
  label = "Date",
  variant = "filled",
  size = "small",
  sx,
  ...props
}: DatePickerFieldProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        slotProps={{
          textField: {
            variant,
            size,
            sx: {
              minWidth: "180px",
              ...sx,
            },
          },
        }}
        {...props}
      />
    </LocalizationProvider>
  );
}
