function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-bold text-3xl sm-max:text-2xl text-center mb-12 sm-max:mb-6">
      {children}
    </h1>
  );
}

export default Heading;
