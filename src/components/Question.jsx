// src/components/Question.jsx
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper,
} from "@mui/material";

export default function Question({ data, selected, onChange, disabledOptions = [] }) {
  if (!data) return null;

  const handleToggle = (option) => {
    const current = selected.includes(option);
    const newSelected = current
      ? selected.filter((o) => o !== option)
      : [...selected, option];
    onChange(newSelected);
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        {data.prompt}
      </Typography>
      <FormGroup>
        {data.options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={selected.includes(option)}
                onChange={() => handleToggle(option)}
                disabled={disabledOptions.includes(option)}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
    </Paper>
  );
}
