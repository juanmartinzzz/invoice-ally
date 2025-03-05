import FeatureList from "./FeatureList";
import { Fragment, useEffect, useState } from "react";
import entityMetadata from "../../data/EntityMetadata";
import supabaseService from "../../integrations/supabase";
import { invoiceTemplate } from "../../data/models/invoice";
import LoadingIndicator from "../../components/Global/LoadingIndicator";

const invoiceFieldNames = [
  'companyName',
  'invoiceNumber',
  'clientName',
  'contactType',
  'emailOrPhone',
  'contactLanguageCode',
  'invoiceLink',
  'invoiceNickname',
];

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [editedInvoiceIndexes, setEditedInvoiceIndexes] = useState([]);
  const [currentlyEditingInvoiceIndex, setCurrentlyEditingInvoiceIndex] = useState(null);

  const updateCompanyNameForAllInvoices = ({companyName}) => {
    setInvoices(invoices.map(invoice => ({...invoice, companyName})));
    const test = [];
    invoices.map((invoice, index) => {
      !editedInvoiceIndexes.includes(index) && test.push(index);
    });
    setEditedInvoiceIndexes([...editedInvoiceIndexes, ...test]);
  }

  const upsertInvoices = () => {
    const delaySeconds = 1;

    editedInvoiceIndexes.map((invoiceIndex, index) => {
      setTimeout(() => {
        setCurrentlyEditingInvoiceIndex(invoiceIndex);
        supabaseService.invoice.upsert({invoiceData: invoices[invoiceIndex]});
      }, index * delaySeconds * 1000);
    });

    setTimeout(() => {
      setCurrentlyEditingInvoiceIndex(null);
    }, editedInvoiceIndexes.length * delaySeconds * 1000);
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
              <th></th>
              {invoiceFieldNames.map(fieldName => (
                <th className="font-bold py-1 pr-1 text-left" key={fieldName}>{entityMetadata.invoice[fieldName].columnHeader}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice, index) => (
              <Fragment key={index}>
                <tr className={`asd ${selectedInvoice === index && 'bg-white'} ${index !== invoices.length - 1 && 'border-b border-gray-300'}`}>
                  <td>
                    {currentlyEditingInvoiceIndex === index && <LoadingIndicator size={4} />}
                  </td>
                  {invoiceFieldNames.map((fieldName) => (
                    <td className="py-1 pr-2" key={fieldName} onClick={() => handleSelectInvoice({index})}>
                      {entityMetadata.invoice[fieldName].getInputElement({ invoice, updateCompanyNameForAllInvoices, onChange: getOnChange({fieldName, index}) })}
                    </td>
                  ))}
                </tr>

                <tr className={`${selectedInvoice !== index && 'hidden'}`}>
                  <td className="bg-white"></td>
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

      <div className="mt-8">
        <div className="text-lg font-bold leading-tight">Coming features</div>
        <div className="text-sm text-gray-700 leading-tight">See what's coming next - vote on what you want to see.</div>
      </div>

      <FeatureList features={[
        {
          title: 'Auto save',
          description: 'Even without your intervention, changes are saved automatically every 10 seconds.'
        },
        {
          title: 'Democratic features',
          description: 'Allow users to vote on what features they want to see next.'
        },
        {
          title: 'Clear status',
          description: 'Clearly show if you have input all required info to send your customer reminders for an invoice.'
        },
        {
          title: 'Smart views',
          description: 'A menu with super useful sorting / grouping options which changes the UI into multiple tables based on, for example, the person who is being charged on the invoice.'
        },
        {
          title: 'Archive invoices',
          description: 'You can archive invoices you no longer need to have top-of-mind.'
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
          done: true,
          title: 'Friendly selects',
          description: 'Select inputs with 3 or fewer options NOT displayed as dropdown. Instead the options are displayed as a line of buttons, with the one selected clearly highlighted.'
        },
        {
          done: true,
          title: 'Saving indicator',
          description: 'When you save, a loading indicator is shown to indicate which invoice is being saved.'
        },
      ]} />
    </div>
  )
}

export default Invoices;