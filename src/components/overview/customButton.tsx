import React from 'react';

interface CustomButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  border?: string;
  extraStyles?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  text, 
  bgColor, 
  textColor, 
  border = {
    width: '0px',
    style: 'solid',
    color: 'transparent'
  },
  extraStyles = {}
}) => {
  // Construct border string from border object
 

  return (
    <button
      className="flex items-center justify-center"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: border ? `1px solid ${border}` : 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        textAlign: 'center',
        width: 'fit-content',
        ...extraStyles
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;