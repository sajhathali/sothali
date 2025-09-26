"use client";
import { Typography, Paper, Box, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Button, Grid, Chip, OutlinedInput, Switch, Alert } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MainContainer from "@/components/MainContainer";

const donationSchema = z.object({
  // Donor Information
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  email: z.string().email("Enter valid email address").optional().or(z.literal("")),
  aadhaar: z.string().min(4, "Aadhaar number required").optional().or(z.literal("")),
  address: z.string().min(10, "Complete address is required"),
  city: z.string().min(2, "City is required"),
  pincode: z.string().regex(/^[1-9][0-9]{5}$/, "Enter valid 6-digit pincode"),
  
  // Food Details
  foodTypes: z.array(z.string()).min(1, "Select at least one food type"),
  numberOfItems: z.number().min(1, "Number of items required"),
  foodDescription: z.string().min(5, "Food description is required"),
  quantityServings: z.number().min(1, "Quantity/servings required"),
  preparationDateTime: z.date().optional(),
  expiryDateTime: z.date().optional(),
  
  // Logistics
  preferredPickupTime: z.string().min(1, "Select preferred pickup time"),
  deliveryPossible: z.boolean(),
  specialInstructions: z.string().optional(),
  
  // Verification & Consent
  photoFile: z.any().optional(),
  safetyConfirm: z.boolean().refine(val => val === true, "Safety confirmation required"),
  termsAccept: z.boolean().refine(val => val === true, "Terms acceptance required"),
});

type DonationFormData = z.infer<typeof donationSchema>;

const foodTypeOptions = ["Cooked", "Raw", "Packaged", "Beverages", "Others"];
const pickupTimeOptions = ["Morning (8 AM - 12 PM)", "Afternoon (12 PM - 4 PM)", "Evening (4 PM - 8 PM)", "ASAP"];

export default function DonationPage() {
  const [selectedFoodTypes, setSelectedFoodTypes] = useState<string[]>([]);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  
  const { control, handleSubmit, formState: { errors }, setValue } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      deliveryPossible: false,
      safetyConfirm: false,
      termsAccept: false,
      foodTypes: [],
    }
  });

  const onSubmit = (data: DonationFormData) => {
    console.log("Form submitted:", data);
    setSubmitStatus("Form submitted successfully! (Frontend only - no backend integration yet)");
  };

  const handleFoodTypeChange = (event: any) => {
    const value = event.target.value;
    setSelectedFoodTypes(typeof value === 'string' ? value.split(',') : value);
    setValue('foodTypes', typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <MainContainer>
      <Typography variant="h3" gutterBottom>
        Donate Food
      </Typography>
      
      <Paper sx={{ p: 4, mt: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Donor Information */}
            <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600, mb: 3 }}>
              1. Donor Information
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Full Name / Organization Name"
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone Number"
                      InputProps={{
                        startAdornment: <Box sx={{ mr: 1, color: 'text.secondary' }}>+91</Box>
                      }}
                      placeholder="9876543210"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type="email"
                      label="Email Address (Optional)"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="aadhaar"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Aadhaar Number (Optional)"
                      placeholder="Enter Aadhaar number"
                      error={!!errors.aadhaar}
                      helperText={errors.aadhaar?.message}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={3}
                      label="Address / Pickup Location"
                      placeholder="Enter complete pickup address"
                      error={!!errors.address}
                      helperText={errors.address?.message || "Google Maps integration will be added later"}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="City"
                      error={!!errors.city}
                      helperText={errors.city?.message}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="pincode"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Pincode"
                      placeholder="400001"
                      error={!!errors.pincode}
                      helperText={errors.pincode?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>

            {/* Food Details */}
            <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600, mb: 3 }}>
              2. Food Details
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={!!errors.foodTypes}>
                  <InputLabel>Type of Food</InputLabel>
                  <Select
                    multiple
                    value={selectedFoodTypes}
                    onChange={handleFoodTypeChange}
                    input={<OutlinedInput label="Type of Food" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    )}
                  >
                    {foodTypeOptions.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.foodTypes && (
                    <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
                      {errors.foodTypes.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="numberOfItems"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      fullWidth
                      type="number"
                      label="Number of Food Items"
                      error={!!errors.numberOfItems}
                      helperText={errors.numberOfItems?.message}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Controller
                  name="foodDescription"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={3}
                      label="Food Description"
                      placeholder="e.g., Rice, Dal, Chapati, Sabji, etc."
                      error={!!errors.foodDescription}
                      helperText={errors.foodDescription?.message}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="quantityServings"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      fullWidth
                      type="number"
                      label="Quantity / Servings"
                      placeholder="Number of people it can serve"
                      error={!!errors.quantityServings}
                      helperText={errors.quantityServings?.message}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="preparationDateTime"
                  control={control}
                  render={({ field }) => (
                    <DateTimePicker
                      {...field}
                      label="Preparation Date & Time"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          helperText: "For cooked items"
                        }
                      }}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="expiryDateTime"
                  control={control}
                  render={({ field }) => (
                    <DateTimePicker
                      {...field}
                      label="Expiry / Safe Consumption Time"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                        }
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            {/* Logistics */}
            <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600, mb: 3 }}>
              3. Logistics
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="preferredPickupTime"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.preferredPickupTime}>
                      <InputLabel>Preferred Pickup Time</InputLabel>
                      <Select {...field} label="Preferred Pickup Time">
                        {pickupTimeOptions.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.preferredPickupTime && (
                        <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
                          {errors.preferredPickupTime.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Controller
                  name="deliveryPossible"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Switch {...field} checked={field.value} />}
                      label="Is Delivery Possible by Donor?"
                      sx={{ mt: 1 }}
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Controller
                  name="specialInstructions"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={3}
                      label="Special Instructions (Optional)"
                      placeholder="e.g., packed in containers, needs refrigeration, etc."
                    />
                  )}
                />
              </Grid>
            </Grid>

            {/* Verification & Consent */}
            <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600, mb: 3 }}>
              4. Verification & Consent
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12}>
                <Controller
                  name="photoFile"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type="file"
                      label="Photo Upload"
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ accept: "image/*" }}
                      onChange={(e) => {
                        const files = (e.target as HTMLInputElement).files;
                        onChange(files ? files[0] : null);
                      }}
                      helperText="Upload image of packed food (helps NGOs assess quality)"
                    />
                  )}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Controller
                  name="safetyConfirm"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={field.value} />}
                      label="I confirm that the food is safe for consumption and not spoiled."
                      sx={{ 
                        color: errors.safetyConfirm ? 'error.main' : 'inherit',
                        '& .MuiFormControlLabel-label': {
                          fontSize: '0.95rem'
                        }
                      }}
                    />
                  )}
                />
                {errors.safetyConfirm && (
                  <Typography variant="caption" color="error" display="block" sx={{ ml: 4, mt: -1 }}>
                    {errors.safetyConfirm.message}
                  </Typography>
                )}
              </Grid>
              
              <Grid item xs={12}>
                <Controller
                  name="termsAccept"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={field.value} />}
                      label="I agree to the terms & conditions of donation."
                      sx={{ 
                        color: errors.termsAccept ? 'error.main' : 'inherit',
                        '& .MuiFormControlLabel-label': {
                          fontSize: '0.95rem'
                        }
                      }}
                    />
                  )}
                />
                {errors.termsAccept && (
                  <Typography variant="caption" color="error" display="block" sx={{ ml: 4, mt: -1 }}>
                    {errors.termsAccept.message}
                  </Typography>
                )}
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ px: 6, py: 1.5, fontSize: '1.1rem' }}
              >
                Submit Donation
              </Button>
            </Box>

            {/* Status Message */}
            {submitStatus && (
              <Alert severity="success" sx={{ mt: 3 }}>
                {submitStatus}
              </Alert>
            )}
          </form>
        </LocalizationProvider>
      </Paper>
    </MainContainer>
  );
}
