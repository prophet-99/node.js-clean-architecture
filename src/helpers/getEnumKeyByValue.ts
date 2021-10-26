const getEnumKeyByValue = (value: string, enumRef: any) => {
  const pairRef = Object.entries(enumRef).find(
    // eslint-disable-next-line no-unused-vars
    ([key, val]) => val === value,
  );

  return (pairRef) ? pairRef[0] : '-';
};

export default getEnumKeyByValue;
