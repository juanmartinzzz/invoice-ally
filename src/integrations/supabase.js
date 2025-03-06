import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Service methods for supabase tables
const supabaseService = {
  transformKeysToUnderscores({data}) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key.replace(/([A-Z])/g, '_$1').toLowerCase(),
        value
      ])
    );
  },
  transformKeysToCamelCase({data}) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()),
        value
      ])
    );
  },
  getLocalId() {
    const localId = localStorage.getItem('localId');
    if (!localId) {
      localStorage.setItem('localId', Math.random().toString(36).substring(2, 14));
    }

    return localId;
  },
  /// Invoice read and write operations
  invoice: {
    // Get all invoices
    async getAll() {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')

      if (error) throw error

      return data.map(invoice => supabaseService.transformKeysToCamelCase({data: invoice}));
    },
    // Get all invoices from a specific owner + all local invoices
    async getByOwnerIdOrLocalId({ownerId, localId}) {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .or(`owner_id.eq.${ownerId}, local_id.eq.${localId}`)
        .order('invoice_number')

      if (error) throw error
      return data.map(invoice => supabaseService.transformKeysToCamelCase({data: invoice}));
    },
    // Get all invoices from a specific owner
    async getByOwnerId({ownerId}) {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('owner_id', ownerId)
        .order('invoice_number')

      if (error) throw error
      return data.map(invoice => supabaseService.transformKeysToCamelCase({data: invoice}));
    },
    // Get single invoice by ID
    async getById({id}) {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return supabaseService.transformKeysToCamelCase({data});
    },
    // Upsert invoice
    async upsert({invoiceData}) {
      const upsertData = supabaseService.transformKeysToUnderscores({data: {...invoiceData, local_id: supabaseService.getLocalId()}});

      if (!invoiceData.id) {
        const { data, error } = await supabase
          .from('invoices')
          .insert([upsertData])
          .select();

        if (error) throw error;
        return supabaseService.transformKeysToCamelCase({data: data[0]});
      } else {
        const { data, error } = await supabase
          .from('invoices')
          .update(upsertData)
          .eq('id', upsertData.id)
          .select();

        if (error) throw error;
        return supabaseService.transformKeysToCamelCase({data: data[0]});
      }
    },
    // Delete invoice
    async delete({id}) {
      const { error } = await supabase
        .from('invoices')
        .delete()
        .eq('id', id)

      if (error) throw error
      return true
    }
  },
}

export default supabaseService;
