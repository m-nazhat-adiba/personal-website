import { createSupabaseClient } from '@/utils/supabase/client';

export const getStacks = async () => {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase.from('stacks').select();
  return { data, error };
};

export const getWorks = async () => {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from('works')
    .select()
    .order('id', { ascending: true });

  return { data, error };
};
