const TritonLogo = ({ className = "", size = 32 }) => {
  return (
    <img
      src="/triton-logo.png"
      alt="Triton Mining Co. Logo"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default TritonLogo;