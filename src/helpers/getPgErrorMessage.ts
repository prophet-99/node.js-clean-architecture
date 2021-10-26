const getPgErrorMessage = (stack: string): string => {
  const rawMessage = (stack.includes('at'))
    ? stack.split('at')[0].trim()
    : stack;
  const parsedMessage = (rawMessage.includes('error:'))
    ? rawMessage.split('error:')[1].trim()
    : rawMessage;

  return parsedMessage;
};

export default getPgErrorMessage;
