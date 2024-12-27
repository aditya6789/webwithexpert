interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerWrapper = ({ children, className = "" }: ContainerWrapperProps) => {
  return (
    <div className={`container mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default ContainerWrapper;