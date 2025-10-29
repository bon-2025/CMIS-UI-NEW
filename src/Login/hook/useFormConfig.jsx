import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../schema/LoginSchema";

export const useFormConfig = {
    resolver: zodResolver(LoginSchema),
    mode: "onSubmit",
    defaultValues: {
      username: "",
      password: "",
      remember: false,
    }
}

