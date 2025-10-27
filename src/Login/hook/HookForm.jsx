import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../schema/LoginSchema";

export const HookForm = {
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: false,
    }
}

