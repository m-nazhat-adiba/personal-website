import React, { useEffect, useState } from 'react';
import { createSupabaseClient } from '@/utils/supabase/client';

const Playground = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const supabase = createSupabaseClient();
        const { data, error } = await supabase.from('notes').select();

        if (error) {
          throw error;
        }

        setNotes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Notes</h1>
      {notes.length > 0 ? (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
};

export default Playground;
