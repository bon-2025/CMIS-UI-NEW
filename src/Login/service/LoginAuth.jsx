import { getAsync } from "../../shared/service/getAsync";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const validateUser = async (UIdata) => {
    // wait 2 seconds before sending request
    await sleep(2000);

    const url = await getAsync('url');
    const users = await getAsync(url[0].login);

    const foundUser = users.find(
      (user) => user.username === UIdata.username
    );

    if (!foundUser) {
      return { success: false };
    }

    if (foundUser.password === UIdata.password) {
      return { success: true, user: { name: "Admin" } };
    } else {
      return { success: false };
    }
};
