import FeatureList from "./FeatureList";
import { useEffect, useState } from "react";
import telegram from "../../integrations/telegram";
import entityMetadata from "../../data/EntityMetadata";

const invoiceFieldNames = [
  'companyName',
  'number',
  'clientName',
  'contactType',
  'contactLanguage',
  'emailOrPhone',
  'invoiceLink',
  'invoiceNickname',
];

const FieldHint = ({title, description}) => {
  return (
    <td className="p-1">
      <div className="font-bold leading-none mb-1">{title}</div>

      <p className="leading-none">{description}</p>
    </td>
  )
}

const Invoices = () => {
  const [invoices, setInvoices] = useState([
    {number: 1, contactType: 'email', contactLanguage: 'english'},
    {number: 2, contactType: 'email', contactLanguage: 'english'},
    {number: 3, contactType: 'email', contactLanguage: 'english'},
    {number: 4, contactType: 'phone', contactLanguage: 'english'},
    {number: 5, contactType: 'email', contactLanguage: 'spanish'},
    {number: 6, contactType: 'email', contactLanguage: 'english'},
    {number: 7, contactType: 'email', contactLanguage: 'english'},
    {number: 8, contactType: 'phone', contactLanguage: 'spanish'},
    {number: 9, contactType: 'email', contactLanguage: 'french'},
    {number: 10, contactType: 'email', contactLanguage: 'english'},
  ]);
  const [selectedInvoice, setSelectedInvoice] = useState(1);

  const updateCompanyNameForAllInvoices = ({companyName}) => {
    setInvoices(invoices.map(invoice => ({...invoice, companyName})));
  }

  useEffect(() => {
    // telegram.sendMessage({message: 'Hello, world!'});
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center">Invoices</h1>

      <div className="min-w-fit bg-light rounded p-2">
        <table className="min-w-full border-collapse text-xs">
          <thead className="">
            <tr>
              {invoiceFieldNames.map((fieldName) => (
                <th className="font-bold p-1 min-w-32">{entityMetadata.invoice[fieldName].columnHeader}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice, index) => (
              <>
                <tr className={`${index !== invoices.length - 1 && 'border-b border-gray-300'}`}>
                  {invoiceFieldNames.map((fieldName) => (
                    <td key={fieldName}>
                      {entityMetadata.invoice[fieldName].getInputElement({ invoice, updateCompanyNameForAllInvoices })}
                    </td>
                  ))}
                </tr>

                <tr className={selectedInvoice === invoice.number ? '' : 'hidden'}>
                  {invoiceFieldNames.map((fieldName) => (
                    <FieldHint title={entityMetadata.invoice[fieldName].helperTitle} description={entityMetadata.invoice[fieldName].helperDescription} />
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <FeatureList features={[
        {
          done: true,
          title: 'Friendly selects',
          description: 'Select inputs with 3 or fewer options NOT displayed as dropdown. Instead the options are displayed as a line of buttons, with the one selected clearly highlighted.'
        },
        {
          title: 'Tone selection',
          description: 'Select the tone of the message you want to send. Choose between Friendly, Casual, Emphatic.'
        },
        {
          title: 'The haggler',
          description: 'A feature that allows you to haggle with the client. You can offer a discount for prompt payment or a discount if they pay their entire balance.'
        },
        {
          title: 'Smart views',
          description: 'A menu with super useful sorting / grouping options which changes the UI into multiple tables based on, for example, the person who is being charged on the invoice.'
        },
      ]} />
    </div>
  )
}

export default Invoices;