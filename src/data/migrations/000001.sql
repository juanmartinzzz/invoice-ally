DROP TABLE IF EXISTS invoices;

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    owner_id VARCHAR(255),
    company_name VARCHAR(255),
    invoice_number VARCHAR(50),
    client_name VARCHAR(255),
    contact_type VARCHAR(50),
    contact_language_code VARCHAR(10) DEFAULT 'en',
    email_or_phone VARCHAR(255),
    invoice_link VARCHAR(255),
    invoice_nickname VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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
