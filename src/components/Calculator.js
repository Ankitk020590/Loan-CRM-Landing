import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(15000);
  const [duration, setDuration] = useState(18);
  const [durationType, setDurationType] = useState("months");
  const [rate, setRate] = useState(7.15);

  const getMonthlyInterest = () => rate / 12 / 100;
  const getDurationInMonths = () =>
    durationType === "months" ? duration : duration * 12;

  const calculateEMI = () => {
    const P = amount;
    const N = getDurationInMonths();
    const R = getMonthlyInterest();
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return emi.toFixed(2);
  };

  const emi = parseFloat(calculateEMI());
  const totalPayment = emi * getDurationInMonths();
  const interestPayable = totalPayment - amount;

  const chartData = [
    { name: "Principal", value: amount },
    { name: "Interest", value: interestPayable },
  ];

  const COLORS = ["#0047ab", "#c90076"];

  return (
    <Box sx={{ background: "#f2fbfa", py: 6, px: 2 }}>
      <Typography variant="h4" align="center" fontWeight={600}>
        Calculator
      </Typography>
      <Typography
        align="center"
        sx={{ maxWidth: 600, mx: "auto", mt: 1, mb: 4 }}
      >
        From they fine john he give of rich he. They age and draw mrs like.
        Improving end distrusts may instantly was household applauded incommode.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography fontWeight={600} mb={1}>
              Loan Amount
            </Typography>
            <Slider
              min={5000}
              max={150000}
              step={1000}
              value={amount}
              onChange={(e, val) => setAmount(val)}
            />
            <Typography variant="h6" sx={{ mb: 3 }}>
              {amount.toLocaleString()}
            </Typography>

            <Typography fontWeight={600} mb={1}>
              Loan Duration
            </Typography>
            <ToggleButtonGroup
              value={durationType}
              exclusive
              onChange={(e, val) => val && setDurationType(val)}
              sx={{ mb: 2 }}
            >
              <ToggleButton value="months">Month</ToggleButton>
              <ToggleButton value="years">Year</ToggleButton>
            </ToggleButtonGroup>

            <Slider
              min={durationType === "months" ? 12 : 1}
              max={durationType === "months" ? 48 : 5}
              value={duration}
              onChange={(e, val) => setDuration(val)}
            />
            <Typography variant="h6" sx={{ mb: 2 }}>
              {duration} {durationType === "months" ? "Months" : "Years"}
            </Typography>

            <Box mt={2}>
              <Typography variant="subtitle1" color="text.secondary">
                Rate of Interest
              </Typography>
              <TextField
                type="number"
                inputProps={{ min: 1, max: 100, step: 0.01 }}
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
                sx={{ width: 100, mt: 1 }}
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                % per annum
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: "100%" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={2}
              mb={2}
            >
              <Box>
                <Typography color="primary" fontWeight={600}>
                  ● EMI Amount
                </Typography>
                <Typography>Principal + Interest</Typography>
                <Typography fontSize={20} fontWeight={600} color="#0047ab">
                  {totalPayment.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                  *
                </Typography>
              </Box>

              <Box>
                <Typography color="#c90076" fontWeight={600}>
                  ● Interest Payable
                </Typography>
                <Typography fontSize={20} fontWeight={600} color="#c90076">
                  {interestPayable.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                  *
                </Typography>
              </Box>
            </Box>

            <Box display="flex" justifyContent="center">
              <PieChart width={200} height={200}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-{index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </Box>

            <Typography variant="h5" fontWeight={600} align="center" mt={2}>
              Your EMI Amount
            </Typography>
            <Typography variant="h4" align="center" fontWeight={700} mb={2}>
              {emi.toLocaleString()}*
            </Typography>

            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  (window.location.href =
                    "https://loancrm.samyotech.in/register")
                }
              >
                Apply Now
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanCalculator;
