const Card = ({ children, className = " " }) => {
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      {/* <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0"> */}
      <div className={`p-4 border rounded-lg shadow-2xl ${className}`}>
        {children}
      </div>
    </div>
    // </div>
  );
};
export default Card;
