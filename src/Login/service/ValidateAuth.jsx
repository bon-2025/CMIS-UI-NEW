import { getAsync } from "../../shared/service/getAsync";
import { DelaySeconds, ValidateUser } from "../utils/FormUtils.jsx";

/**
 * Validate a user's login credentials
 * @param {Object} UIdata - User input from login form
 * @returns {Object} result - { success: boolean, user?: object, message?: string }
 */

export const ValidateAuth = async (UIdata) => {
  try {
    // Artificial delay for UX/testing
    await DelaySeconds(2);

    // 1️⃣ Fetch base URL config
    const urlData = await getAsync("url");

    if (!urlData?.[0]?.login) {
      throw new Error("Invalid URL configuration.");
    }

    // 2️⃣ Fetch list of users
    const users = await getAsync(urlData[0].login);

      if (!Array.isArray(users)) {
        throw new Error("Users data is not valid.");
      }

      // 3️⃣ Find matching user
      const foundUser = users.find(
        (user) => user.username === UIdata.username
      );

      
    // 4️⃣ Run custom validation logic (you can handle errors inside this)
    ValidateUser(foundUser);

    // 5️⃣ Compare passwords
    if (foundUser && foundUser.password === UIdata.password) {
      return {
        success: true,
        user: { name: foundUser.name || foundUser.username },
      };
    }

    // If credentials don't match
    return {
      success: false,
      message: "Invalid username or password.",
    };
  } catch (error) {
    //console.error("Login validation error:", error);
    return {
      success: false,
      message: error.message || "Something went wrong.",
    };
  }
};
