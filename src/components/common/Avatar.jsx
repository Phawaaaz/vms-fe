import React from 'react';

const Avatar = ({ name, src, size = 'md' }) => {
  const initials = name
    ? name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[#3c73b6] text-white font-medium ${sizeClasses[size]}`}
    >
      {src ? (
        <img
          src={src}
          alt={name || 'Avatar'}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        initials
      )}
    </div>
  );
};

export default Avatar;