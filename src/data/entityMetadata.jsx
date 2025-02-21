import { ReplaceAll } from "lucide-react";
import ElementWithTooltip from "../Components/Global/ElementWithTooltip";
import SelectInput from "../Components/Global/SelectInput";

const entityMetadata = {
  invoice: {
    companyName: {
      required: true,
      inputType: 'text',
      columnHeader: 'You',
      helperTitle: 'Your business or name',
      helperDescription: 'Help your customers clearly understand who is contacting them.',
      getInputElement: ({invoice, updateCompanyNameForAllInvoices}) => (
        <div className="flex gap-1">
          <input value={invoice.companyName} type="text" placeholder="Your company or name" className="w-full border-gray-300 px-1 focus:border" />

          <ElementWithTooltip element={<ReplaceAll className="w-4 h-4 cursor-pointer" onClick={() => updateCompanyNameForAllInvoices({companyName: invoices[index].companyName})} />} title="Use this value for all invoices" />
        </div>
      ),
    },
    number: {
      required: true,
      inputType: 'text',
      columnHeader: 'Number',
      helperTitle: 'Invoice Number',
      helperDescription: 'The same invoice number your accounting system uses, or the sequential number you assigned, so you can easily match it with your records.',
      getInputElement: ({invoice}) => (
        <input type="text" placeholder="Invoice Number" className="w-full border-gray-300 px-1 focus:border" />
      )
    },
    clientName: {
      required: true,
      inputType: 'text',
      columnHeader: 'Client Name',
      helperTitle: 'Client Name',
      helperDescription: 'Enter the full name of the client.',
      getInputElement: ({invoice}) => (
        <input type="text" placeholder="Client Name" className="w-full border-gray-300 px-1 focus:border" />
      )
    },
    contactType: {
      required: true,
      inputType: 'select',
      columnHeader: 'Contact Type',
      helperTitle: 'Contact Type',
      helperDescription: 'Select the type of contact you want to use.',
      getInputElement: ({invoice}) => (
        <SelectInput options={[{value: 'email', label: 'Email'}, {value: 'phone', label: 'Phone'}]} value={invoice.contactType} onChange={() => {}} />
      )
    },
    contactLanguage: {
      inputType: 'select',
      columnHeader: 'Contact Language',
      helperTitle: 'Contact Language',
      helperDescription: 'Select the language of the contact you want to use.',
      getInputElement: ({invoice}) => (
        <SelectInput options={[{value: 'english', label: 'English'}, {value: 'spanish', label: 'Spanish'}]} value={invoice.contactLanguage} onChange={() => {}} />
      )
    },
    emailOrPhone: {
      required: true,
      inputType: 'text',
      columnHeader: 'Email/Phone',
      helperTitle: 'Email/Phone',
      helperDescription: 'Enter the email or phone number of the contact you want to use.',
      getInputElement: ({invoice}) => (
        <input type="text" placeholder="Email/Phone" className="w-full border-gray-300 px-1 focus:border" />
      )
    },
    invoiceLink: {
      inputType: 'text',
      columnHeader: 'Invoice Link',
      helperTitle: 'Invoice Link',
      helperDescription: 'Enter the link to the invoice you want to use.',
      getInputElement: ({invoice}) => (
        <input type="text" placeholder="Invoice Link" className="w-full border-gray-300 px-1 focus:border" />
      )
    },
    invoiceNickname: {
      inputType: 'text',
      columnHeader: 'Nickname',
      helperTitle: 'What this invoice is all about',
      helperDescription: 'A phrase that helps you remember who you sent the invoice to and which work they will pay for.',
      getInputElement: ({invoice}) => (
        <input type="text" placeholder="Invoice Nickname" className="w-full border-gray-300 px-1 focus:border" />
      )
    }
  }
}

export default entityMetadata;