export default function useFormatNumberToString2Digit() {
  const to2Digits = (numb) => {
    if (numb<10) numb="0"+numb;
    return numb;
  }
  return {
    to2Digits
  }
}