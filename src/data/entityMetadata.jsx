import { ReplaceAll } from "lucide-react";
import SelectInput from "../Components/Global/SelectInput";
import ElementWithTooltip from "../Components/Global/ElementWithTooltip";

const entityMetadata = {
  invoice: {
    companyName: {
      required: true,
      inputType: 'text',
      columnHeader: 'You',
      helperTitle: 'How this client recognizes you',
      helperDescription: 'Help your customers clearly understand who is contacting them.',
      getInputElement: ({invoice, onChange, updateCompanyNameForAllInvoices}) => (
        <div className="flex gap-1">
          <input value={invoice.companyName} type="text" placeholder="Your company or name" className="w-full border-gray-300 pr-1 focus:border" onChange={onChange} />

          <ElementWithTooltip element={<ReplaceAll className="w-4 h-4 cursor-pointer" onClick={() => updateCompanyNameForAllInvoices({companyName: invoice.companyName})} />} title="Use this value for all invoices" />
        </div>
      ),
    },
    invoiceNumber: {
      required: true,
      inputType: 'text',
      columnHeader: 'Invoice Number',
      helperTitle: 'A link between your accounting and this service',
      helperDescription: 'The same number your accounting system assigned this invoice, or the sequential number you assigned manually, so you can easily match it with your records.',
      getInputElement: ({invoice, onChange}) => (
        <input value={invoice.invoiceNumber} type="text" placeholder="Invoice Number" className="w-full border-gray-300 pr-1 focus:border" onChange={onChange} />
      )
    },
    clientName: {
      required: true,
      inputType: 'text',
      columnHeader: 'Client Name',
      helperTitle: 'How to address this client',
      helperDescription: 'Enter the name of the client or their business, as it will appear on messages sent to them to remind them they need to pay.',
      getInputElement: ({invoice, onChange}) => (
        <input value={invoice.clientName} type="text" placeholder="Client Name" className="w-full border-gray-300 pr-1 focus:border" onChange={onChange} />
      )
    },
    contactType: {
      required: true,
      inputType: 'select',
      columnHeader: 'Contact Type',
      helperTitle: 'Best way to reach this client',
      helperDescription: 'Select how you want us to contact the client.',
      getInputElement: ({invoice, onChange}) => (
        <SelectInput value={invoice.contactType} options={[{value: 'email', label: 'Email'}, {value: 'phone', label: 'Phone'}]} onChange={onChange} />
      )
    },
    contactLanguageCode: {
      inputType: 'select',
      columnHeader: 'Contact Language',
      helperTitle: 'Contact Language',
      helperDescription: 'Select the language of the contact you want to use.',
      getInputElement: ({invoice, onChange}) => (
        <SelectInput value={invoice.contactLanguageCode} options={[{value: 'en', label: 'EN'}, {value: 'es', label: 'ES'}, {value: 'fr', label: 'FR'}]} onChange={onChange} />
      )
    },
    emailOrPhone: {
      required: true,
      inputType: 'text',
      columnHeader: 'Email/Phone',
      helperTitle: 'Email/Phone',
      helperDescription: 'Enter the email or phone number of the contact you want to use.',
      getInputElement: ({invoice, onChange}) => (
        <input value={invoice.emailOrPhone} type="text" placeholder="Email/Phone" className="w-full border-gray-300 pr-1 focus:border" onChange={onChange} />
      )
    },
    invoiceLink: {
      inputType: 'text',
      columnHeader: 'Invoice Link',
      helperTitle: 'Invoice Link',
      helperDescription: 'Enter the link to the invoice you want to use.',
      getInputElement: ({invoice, onChange}) => (
        <input value={invoice.invoiceLink} type="text" placeholder="Invoice Link" className="w-full border-gray-300 pr-1 focus:border" onChange={onChange} />
      )
    },
    invoiceNickname: {
      inputType: 'text',
      columnHeader: 'Nickname',
      helperTitle: 'What this invoice is all about',
      helperDescription: 'A phrase to help you remember who you sent the invoice to, and which work you did for them.',
      getInputElement: ({invoice, onChange}) => (
        <input value={invoice.invoiceNickname} type="text" placeholder="Invoice Nickname" className="w-full border-gray-300 pr-1 focus:border" onChange={onChange} />
      )
    }
  }
}

export default entityMetadata;