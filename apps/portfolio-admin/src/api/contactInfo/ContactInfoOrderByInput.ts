import { SortOrder } from "../../util/SortOrder";

export type ContactInfoOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
