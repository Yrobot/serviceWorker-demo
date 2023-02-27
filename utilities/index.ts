export const waitUntil = (
  checker: () => boolean,
  option?: { timeout?: number; max?: number }
) =>
  new Promise((resolve, reject) => {
    const { timeout = 100, max = 0 } = option ?? {};
    let start = Date.now();
    const id = setInterval(() => {
      if (checker()) {
        clearInterval(id);
        resolve(true);
      } else if (max > 0 && Date.now() - start > max) {
        clearInterval(id);
        reject("waitUntil max time run out.");
      }
    }, timeout);
  });
