import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

/**
 * Custom wrapper around MUI Button.
 * Provides consistent defaults and supports variants, sizes, colors.
 */
export const CustomButton = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  disabled = false,
  onClick,
  fullWidth = false,
  sx = {},
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        borderRadius: "8px", // Custom style
        textTransform: "none", // No CAPS
        fontWeight: 600,
        ...sx, // Allow user overrides
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning"
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  sx: PropTypes.object
};