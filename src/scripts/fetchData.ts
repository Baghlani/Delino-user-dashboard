import { User } from "./types/User.interface";

export default async (url: string): Promise<User[]> => {
  return await new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      method: "GET",
      success: resolve,
      error: reject,
    });
  });
};
