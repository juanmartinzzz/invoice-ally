import FeatureList from "./FeatureList";
import { Fragment, useEffect, useState } from "react";
import entityMetadata from "../../data/EntityMetadata";
import supabaseService from "../../integrations/supabase";
import { invoiceTemplate } from "../../data/models/invoice";

const invoiceFieldNames = [
  'companyName',
  'invoiceNumber',
  'clientName',
  'contactType',
  'contactLanguageCode',
  'emailOrPhone',
  'invoiceLink',
  'invoiceNickname',
];

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [editedInvoiceIndexes, setEditedInvoiceIndexes] = useState([]);

  const updateCompanyNameForAllInvoices = ({companyName}) => {
    setInvoices(invoices.map(invoice => ({...invoice, companyName})));
    const test = [];
    invoices.map((invoice, index) => {
      !editedInvoiceIndexes.includes(index) && test.push(index);
    });
    setEditedInvoiceIndexes([...editedInvoiceIndexes, ...test]);
  }

  const upsertInvoices = () => {
    editedInvoiceIndexes.forEach(index => {
      supabaseService.invoice.upsert({invoiceData: invoices[index]});
    });
  }

  useEffect(() => {
    // telegram.sendMessage({message: 'Hello, world!'});
    supabaseService.invoice.getByOwnerId({ownerId: '111'}).then((invoices) => {
      setInvoices([...invoices, invoiceTemplate]);
    });
  }, []);

  const handleSelectInvoice = ({index}) => {
    setSelectedInvoice(index);
  }

  const getOnChange = ({fieldName, index}) => ({target}) => {
    setInvoices(invoices.map((invoice, mapIndex) => mapIndex === index ? {...invoice, [fieldName]: target.value} : invoice));
    !editedInvoiceIndexes.includes(index) && setEditedInvoiceIndexes([...editedInvoiceIndexes, index]);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center">Invoices</h1>
      <h1 className="text-2xl font-bold text-center">{editedInvoiceIndexes.join(', ')}</h1>
      <button className="bg-secondary mb-4 text-white px-4 py-1 rounded cursor-pointer" onClick={() => upsertInvoices()}>Save</button>

      <div className="min-w-fit bg-light rounded p-2">
        <table className="min-w-full border-collapse text-xs">
          <thead>
            <tr>
              {invoiceFieldNames.map(fieldName => (
                <th className="font-bold p-1 min-w-32" key={fieldName}>{entityMetadata.invoice[fieldName].columnHeader}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice, index) => (
              <Fragment key={index}>
                <tr className={`${selectedInvoice === index && 'bg-white'} ${index !== invoices.length - 1 && 'border-b border-gray-300'}`}>
                  {invoiceFieldNames.map((fieldName) => (
                    <td className="px-2" key={fieldName} onClick={() => handleSelectInvoice({index})}>
                      {entityMetadata.invoice[fieldName].getInputElement({ invoice, updateCompanyNameForAllInvoices, onChange: getOnChange({fieldName, index}) })}
                    </td>
                  ))}
                </tr>

                <tr className={selectedInvoice !== index && 'hidden'}>
                  {invoiceFieldNames.map((fieldName) => (
                    <td className="p-2 align-text-top bg-white" key={fieldName}>
                      <div className="font-bold leading-none mb-1 text-secondary">{entityMetadata.invoice[fieldName].helperTitle}</div>

                      <p className="leading-none">{entityMetadata.invoice[fieldName].helperDescription}</p>
                    </td>
                  ))}
                </tr>
              </Fragment>
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