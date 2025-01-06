import React from 'react'

interface CustomButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  border?: string; // Optional border prop
  extraStyles?: React.CSSProperties; // Optional extra styles prop
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, bgColor, textColor, border, extraStyles }) => {
  return (
    <div style={{
      backgroundColor: bgColor,
      color: textColor,
      border: border ? `1px solid ${border}` : 'none', // Apply border if provided
      padding: '10px 20px',
      borderRadius: '5px',
      display: 'inline-block',
      cursor: 'pointer',
      ...extraStyles // Apply extra styles if provided
    }}>
      {text}
    </div>
  )
}

export default CustomButton
