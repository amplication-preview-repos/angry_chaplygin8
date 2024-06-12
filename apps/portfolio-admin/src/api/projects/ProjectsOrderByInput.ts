import { SortOrder } from "../../util/SortOrder";

export type ProjectsOrderByInput = {
  completedDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
