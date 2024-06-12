import { JsonValue } from "type-fest";

export type Profile = {
  about: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  profilePicture: JsonValue;
  updatedAt: Date;
};
