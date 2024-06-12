import { InputJsonValue } from "../../types";

export type ProfileUpdateInput = {
  about?: string | null;
  name?: string | null;
  profilePicture?: InputJsonValue;
};
