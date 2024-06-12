import { InputJsonValue } from "../../types";

export type ProfileCreateInput = {
  about?: string | null;
  name?: string | null;
  profilePicture?: InputJsonValue;
};
