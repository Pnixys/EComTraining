export const IsNotNullOrUndefined = <T>(data: T) => {
  return !(data === null || data === undefined);
};

export const IsNotNull = <T>(data: T) => {
  return data !== null;
};
