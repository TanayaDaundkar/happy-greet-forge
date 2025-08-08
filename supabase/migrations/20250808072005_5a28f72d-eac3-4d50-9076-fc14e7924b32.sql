-- Fix OTP expiry configuration to recommended settings
-- Set OTP expiry to 10 minutes (600 seconds) as recommended for security
UPDATE auth.config 
SET value = '600' 
WHERE key = 'OTP_EXPIRY';