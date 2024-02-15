export const errorHandler = (statusCode, message) => {
  const error = new Error("Your custom error message");
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
