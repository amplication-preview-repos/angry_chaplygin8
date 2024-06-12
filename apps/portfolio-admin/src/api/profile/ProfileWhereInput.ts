import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProfileWhereInput = {
  about?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  profilePicture?: JsonFilter;
};
