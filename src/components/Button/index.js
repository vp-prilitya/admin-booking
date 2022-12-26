import React from "react";
import { Button } from "react-bootstrap";
import Loading from "../Loading";

function SButton({
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {loading ? <Loading size="sm" /> : children}
    </Button>
  );
}

export default SButton;
