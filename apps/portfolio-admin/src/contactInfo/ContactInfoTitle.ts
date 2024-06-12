import { ContactInfo as TContactInfo } from "../api/contactInfo/ContactInfo";

export const CONTACTINFO_TITLE_FIELD = "phone";

export const ContactInfoTitle = (record: TContactInfo): string => {
  return record.phone?.toString() || String(record.id);
};
