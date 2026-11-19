
import dotenv from 'dotenv'

// Load environment variables first
dotenv.config({ path: '.env.local' })

async function testConnection() {
  // Import Supabase after loading environment variables
  const { supabase } = await import('./app/lib/supabase')

  console.log(
    'URL exists:',
    !!process.env.NEXT_PUBLIC_SUPABASE_URL
  )

  console.log(
    'Key exists:',
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .limit(1)

  if (error) {
    console.error('❌ Query failed:', error.message)
    return
  }

  console.log('✅ Supabase connected successfully!')
  console.log('Products:', data)
}

testConnection()
