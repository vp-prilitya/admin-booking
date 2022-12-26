import SSpinner from "../Spinner";

function Loading({ variant, size }) {
  return (
    <div>
      <SSpinner variant={variant} size={size} /> Loading...{" "}
    </div>
  );
}

export default Loading;
