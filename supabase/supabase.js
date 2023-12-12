/*const supabase = require('@supabase/supabase-js')

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)*/
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = 'https://ahpzovodrissywxpxlib.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFocHpvdm9kcmlzc3l3eHB4bGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzNzg1ODUsImV4cCI6MjAxNzk1NDU4NX0.PBp04SDvl2tnEIHq9eN0ABXTsgid_ttpn-M3hajGZ1w'
// Initialise le client Supabase avec vos clés d'API
const supabase = createClient(supabaseUrl, supabaseKey);
// Vérifier si vous êtes connecté à Supabase

module.exports=supabase;