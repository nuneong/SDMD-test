const BetaBadge = () => {
  return (
    <div 
      className="inline-flex items-center justify-center px-3 py-1.5 rounded-full"
      style={{
        backgroundColor: 'rgba(147, 51, 234, 0.41)', // purple-600 with same transparency as mic button
      }}
    >
      <span className="text-xs font-medium text-purple-300">MolfuseAI BETA</span>
    </div>
  );
};

export default BetaBadge;

