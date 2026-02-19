"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/app/components/ui/utils";
import { Calendar } from "@/app/components/ui/calendar";
import { LookerFilterLabel } from "./LookerFilterLabel";

export interface LookerDateRangePickerProps {
  id: string;
  label: string;
  value: { startDate: string | null; endDate: string | null } | null;
  onChange: (value: { startDate: string | null; endDate: string | null } | null) => void;
  width?: string;
  className?: string;
}

export function LookerDateRangePicker({
  id,
  label,
  value,
  onChange,
  width = "200px",
  className,
}: LookerDateRangePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [tempDateRange, setTempDateRange] = React.useState<DateRange | undefined>();

  React.useEffect(() => {
    if (isOpen) {
      // Initialize temp value when opening
      if (!value?.startDate && !value?.endDate) {
        setTempDateRange(undefined);
      } else {
        setTempDateRange({
          from: value?.startDate ? new Date(value.startDate) : undefined,
          to: value?.endDate ? new Date(value.endDate) : undefined,
        });
      }
    }
  }, [isOpen, value]);

  const formatDateRange = () => {
    if (!value?.startDate && !value?.endDate) return "Is any value";
    if (value.startDate && value.endDate) {
      return `${formatDate(value.startDate)} - ${formatDate(value.endDate)}`;
    }
    if (value.startDate) return `From ${formatDate(value.startDate)}`;
    if (value.endDate) return `Until ${formatDate(value.endDate)}`;
    return "Is any value";
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const handleSelect = (range: DateRange | undefined) => {
    console.log('Date range selected:', range);
    setTempDateRange(range);
  };

  const handleApply = () => {
    console.log('[LookerDateRangePicker] handleApply called, tempDateRange:', tempDateRange);
    if (!tempDateRange?.from && !tempDateRange?.to) {
      console.log('[LookerDateRangePicker] No dates selected, calling onChange(null)');
      onChange(null);
      setIsOpen(false);
      return;
    }

    // Format dates as YYYY-MM-DD in local timezone
    const formatLocalDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const newValue = {
      startDate: tempDateRange?.from ? formatLocalDate(tempDateRange.from) : null,
      endDate: tempDateRange?.to ? formatLocalDate(tempDateRange.to) : null,
    };
    console.log('[LookerDateRangePicker] Calling onChange with:', newValue);
    onChange(newValue.startDate || newValue.endDate ? newValue : null);
    setIsOpen(false);
  };

  const handleClear = () => {
    setTempDateRange(undefined);
    onChange(null);
    setIsOpen(false);
  };

  return (
    <div className={cn("flex flex-col", className)} style={{ width: width || "auto", minWidth: "200px" }}>
      <LookerFilterLabel htmlFor={id}>{label}</LookerFilterLabel>
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger
          id={id}
          className={cn(
            "inline-flex items-center justify-between gap-2",
            "h-9 px-3 py-2",
            "rounded-full",
            "bg-[var(--looker-filter-bg)] border border-[var(--looker-filter-border)]",
            "text-sm",
            (!value?.startDate && !value?.endDate) 
              ? "text-[var(--looker-filter-placeholder)] italic" 
              : "text-[var(--looker-filter-text-color)]",
            "hover:border-[var(--looker-filter-border-hover)]",
            "focus:outline-none focus:ring-2",
            "focus-visible:ring-[var(--looker-filter-border-focus)] focus:border-[var(--looker-filter-border-focus)]",
            "transition-all duration-150",
            "cursor-pointer"
          )}
        >
          <span className="truncate flex-1 text-left">{formatDateRange()}</span>
          <CalendarIcon className="size-4 opacity-60 shrink-0" />
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className={cn(
              "z-[100]",
              "rounded-lg border border-[var(--border-default)]",
              "bg-white shadow-lg",
              "flex flex-col",
              "data-[state=open]:animate-in data-[state=closed]:animate-out",
              "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
            )}
            align="start"
            sideOffset={4}
            avoidCollisions={true}
            collisionPadding={16}
          >
            <style>{`
              .rdp {
                --rdp-accent-color: var(--primary-blue);
                --rdp-background-color: var(--primary-blue);
                --rdp-accent-color-dark: var(--primary-blue);
                --rdp-background-color-dark: var(--primary-blue);
              }
              .rdp-day_selected, 
              .rdp-day_selected:hover, 
              .rdp-day_selected:focus {
                background-color: var(--primary-blue) !important;
                color: white !important;
              }
              .rdp-day_range_start,
              .rdp-day_range_end {
                background-color: var(--primary-blue) !important;
                color: white !important;
              }
              .rdp-day_range_middle {
                background-color: rgba(59, 142, 219, 0.15) !important;
                color: var(--text-primary) !important;
              }
            `}</style>
            <div className="p-3 overflow-auto max-h-[400px]">
              <Calendar
                mode="range"
                defaultMonth={tempDateRange?.from}
                selected={tempDateRange}
                onSelect={handleSelect}
                numberOfMonths={2}
              />
            </div>
            <div className="flex gap-2 px-3 py-3 border-t border-[var(--border-default)] bg-white sticky bottom-0">
              <button
                type="button"
                onClick={handleClear}
                className="flex-1 h-9 px-4 text-sm font-medium border border-[var(--border-default)] rounded-md bg-[var(--grey-50)] text-[var(--text-primary)] hover:bg-[var(--grey-100)] transition-colors cursor-pointer"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleApply}
                className="flex-1 h-9 px-4 text-sm font-medium bg-[var(--primary-main)] text-white rounded-md hover:bg-[var(--primary-dark)] transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
