import React from 'react';
import { Sparkles } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { ContactForm } from '../components/forms/ContactForm';
import contactsContent from '../content/contacts.json';

export const Contacts: React.FC = () => {
  return (
    <div className="space-y-6 py-6 max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5 text-amber-500" />}>
          {contactsContent.formBadge || "Прямая связь с преподавателем"}
        </Badge>
        <h1 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl">
          {contactsContent.headingTitle}
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          {contactsContent.headingSubtitle}
        </p>
      </div>

      {/* Main Form Block */}
      <div className="w-full">
        <ContactForm />
      </div>

    </div>
  );
};
