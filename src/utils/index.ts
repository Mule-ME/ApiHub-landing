export * from "./cnHelper";
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US").format(date);
};

export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
