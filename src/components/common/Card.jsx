import React from 'react';

const Card = ({ title, children, className = '', icon, action }) => {
  return (
    <div className={`bg-white rounded-2xl shadow p-6 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-4">
          {title && (
            <div className="flex items-center">
              {icon && <span className="mr-2 text-[#3c73b6]">{icon}</span>}
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
          )}
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;