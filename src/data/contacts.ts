import contactsContent from '../content/contacts.json';
import { ContactInfo } from '../types';

export const contactsData: ContactInfo = {
  vkUrl: contactsContent.vkUrl,
  isVkPending: contactsContent.isVkPending,
  telegramUrl: contactsContent.telegramUrl,
  isTelegramPending: contactsContent.isTelegramPending,
  maxUrl: contactsContent.maxUrl,
  isMaxPending: contactsContent.isMaxPending,
  email: contactsContent.email,
  isEmailPending: contactsContent.isEmailPending,
  workingHours: contactsContent.workingHours,
  locationNote: contactsContent.locationNote
};
