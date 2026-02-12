import { TextField, TextFieldProps } from "@/app/components/playbook";
import SearchIcon from "@mui/icons-material/Search";

type SearchFieldProps = Omit<TextFieldProps, "variant"> & {
  variant?: "filled" | "outlined" | "standard";
};

export function SearchField({
  placeholder = "Search...",
  size = "small",
  variant = "filled",
  sx,
  ...props
}: SearchFieldProps) {
  return (
    <TextField
      variant={variant}
      size={size}
      placeholder={placeholder}
      slotProps={{
        input: {
          startAdornment: <SearchIcon sx={{ mr: 1 }} />,
        },
      }}
      sx={{
        minWidth: "220px",
        ...sx,
      }}
      {...props}
    />
  );
}
