import { createSupabaseClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export const getStacks = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createSupabaseClient();
        const { data, error } = await supabase.from('stacks').select();

        if (error) {
          throw error;
        }
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export const getWorks = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createSupabaseClient();
        const { data, error } = await supabase
          .from('works')
          .select()
          .order('id', { ascending: true });

        if (error) {
          throw error;
        }
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};
