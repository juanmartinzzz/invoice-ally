import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Service methods for invoices table
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
    // Get all invoices from a specific owner
    async getByOwnerId({ownerId}) {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('owner_id', ownerId)

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
      const upsertData = supabaseService.transformKeysToUnderscores({data: invoiceData});

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
