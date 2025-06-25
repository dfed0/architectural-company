export const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 12); 
  let result = '+';

  if (digits.length > 0) result += digits.slice(0, 3);          
  if (digits.length >= 4) result += ' ' + digits.slice(3, 5);    
  if (digits.length >= 6) result += ' ' + digits.slice(5, 8);   
  if (digits.length >= 9) result += ' ' + digits.slice(8, 10);    
  if (digits.length >= 11) result += ' ' + digits.slice(10, 12);  

  return result;
};

export const getRawCursorPosition = (value: string, cursor: number) => {
  return value.slice(0, cursor).replace(/\D/g, '').length;
};

export const getFormattedCursorPosition = (digits: string, rawPos: number) => {
  const formatted = formatPhoneNumber(digits);
  let digitCount = 0;

  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      digitCount++;
    }
    if (digitCount >= rawPos) {
      return i + 1;
    }
  }

  return formatted.length;
};