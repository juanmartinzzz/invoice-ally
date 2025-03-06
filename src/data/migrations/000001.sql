DROP TABLE IF EXISTS invoices;

CREATE TABLE invoices (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    local_id VARCHAR(255) NOT NULL,
    owner_id VARCHAR(255),
    company_name VARCHAR(255),
    invoice_number VARCHAR(50),
    client_name VARCHAR(255),
    contact_type VARCHAR(50),
    contact_language_code VARCHAR(10) DEFAULT 'en',
    email_or_phone VARCHAR(255),
    reminder_frequency JSONB,
    invoice_link VARCHAR(255),
    invoice_nickname VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on local_id
CREATE INDEX idx_invoices_local_id ON invoices (local_id);

-- Create a trigger to set updated_at on update
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_invoices_updated_at
    BEFORE UPDATE ON invoices
    FOR EACH ROW
    EXECUTE FUNCTION set_updated_at();
