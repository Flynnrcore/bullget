import DatePicker from 'react-datepicker';
import { CalendarDays } from 'lucide-react';
import { ru } from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePicker.css';

export type DateRange = [Date | null, Date | null];

type DateRangePickerProps = {
  value: DateRange;
  onChange: (value: DateRange) => void;
  css?: Record<string, string>;
};

export const DateRangePicker = ({ value, onChange, css = {} }: DateRangePickerProps) => {
  const [startDate, endDate] = value;

  return (
    <div className="date-range-picker" style={{ ...css }} role="group" aria-label="Период отчёта">
      <CalendarDays className="date-range-picker__icon" size={18} aria-hidden="true" />
      <div className="date-range-picker__field date-range-picker__field--start">
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) =>
            onChange([date, endDate && date && endDate < date ? null : endDate])
          }
          selectsStart
          startDate={startDate}
          endDate={endDate}
          maxDate={endDate ?? undefined}
          dateFormat="dd.MM.yyyy"
          locale={ru}
          popperPlacement="bottom-start"
          calendarClassName="date-range-picker__calendar"
          popperClassName="date-range-picker__popper"
          showPopperArrow={false}
          placeholderText="дд.мм.гггг"
          aria-label="Дата начала периода"
        />
      </div>
      <span className="date-range-picker__separator" aria-hidden="true">
        —
      </span>
      <div className="date-range-picker__field date-range-picker__field--end">
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => onChange([startDate, date])}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate ?? undefined}
          dateFormat="dd.MM.yyyy"
          locale={ru}
          popperPlacement="bottom-end"
          calendarClassName="date-range-picker__calendar"
          popperClassName="date-range-picker__popper"
          showPopperArrow={false}
          placeholderText="дд.мм.гггг"
          aria-label="Дата окончания периода"
        />
      </div>
    </div>
  );
};
