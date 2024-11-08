const { createSupabaseClient } = require('@/utils/supabase/client');

export const updateWorks = async (payload) => {
  const supabase = createSupabaseClient();
  try {
    const { data: insertData, error: insertError } = await supabase
      .from('works')
      .insert([payload]);

    if (insertError) {
      throw new Error('Data insert failed: ' + insertError.message);
    }
    alert('Work added successfully!');
  } catch (err) {
    console.log(err);
  }
};
