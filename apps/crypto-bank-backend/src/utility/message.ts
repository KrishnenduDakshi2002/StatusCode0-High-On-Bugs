function message(statusCode: number, message: string, data?: any) {
  return {
    statusCode,
    message,
    data,
  };
}

interface MessageType {
  statusCode: number;
  message: string;
  data?: any;
}

export { MessageType, message };
