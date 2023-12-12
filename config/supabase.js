/*const supabase = require('@supabase/supabase-js')

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)*/
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = 'https://ahpzovodrissywxpxlib.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFocHpvdm9kcmlzc3l3eHB4bGliIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjM3ODU4NSwiZXhwIjoyMDE3OTU0NTg1fQ._tOIMNclG3nRz3FSUMiZmgTjWh2s6R_R4TlJN2uKePQ'
// Initialise le client Supabase avec vos clés d'API
const supabase = createClient(supabaseUrl, supabaseKey);
// Vérifier si vous êtes connecté à Supabase

module.exports=supabase;