const invoice = {
  id: { type: 'number' },
  localId: { type: 'string' },
  ownerId: { type: 'string' },
  companyName: { type: 'string' },
  invoiceNumber: { type: 'string' },
  clientName: { type: 'string' },
  contactType: { type: 'string' },
  contactLanguageCode: { type: 'string' },
  emailOrPhone: { type: 'string' },
  invoiceLink: { type: 'string' },
  invoiceNickname: { type: 'string' },
  createdAt: { type: 'date' },
  updatedAt: { type: 'date' },
};

const invoiceTemplate = {
  ownerId: '111',
  companyName: '',
  invoiceNumber: '',
  clientName: '',
  contactType: 'email',
  contactLanguageCode: 'en', // TODO: Replace with User's default language
  emailOrPhone: '',
  invoiceLink: '',
  invoiceNickname: '',
};

export { invoiceTemplate };