import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  about?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  profilePicture?: SortOrder;
  updatedAt?: SortOrder;
};
