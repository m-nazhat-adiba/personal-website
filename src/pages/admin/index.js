import { useAuth } from '@/context/AuthProvider';
import { useSupabaseFetch } from '@/hooks/useSupabaseFetch';
import { getStacks } from '@/services/getSupabase';
import { updateWorks } from '@/services/updateSupabase';
import { createSupabaseClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const [desc, setDesc] = useState('');
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const router = useRouter();

  const { data, error, loading } = useSupabaseFetch(getStacks);
  const { user, loadingAuth, logout } = useAuth();

  useEffect(() => {
    console.log(user, loadingAuth);
    if (!user && !loadingAuth) {
      router.push('/login');
    }
  }, [user, loadingAuth]);

  const handleStackChange = (event) => {
    const { name, checked } = event.target;
    setSelectedStacks((prev) =>
      checked ? [...prev, name] : prev.filter((stack) => stack !== name),
    );
  };

  const StackList = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>{error.message}</p>;
    } else {
      return data.map((item) => (
        <div key={item.id}>
          <input
            id={`${item.name}`}
            type="checkbox"
            name={item.name}
            checked={selectedStacks.includes(item.name)}
            onChange={handleStackChange}
            className="text-black"
          />
          <label htmlFor={`${item.name}`}>{item.name}</label>
        </div>
      ));
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const supabase = createSupabaseClient();
    try {
      if (image) {
        const { data: imageData, error: imageError } = await supabase.storage
          .from('supabase')
          .upload(`files/${image.name}`, image);

        if (imageError) {
          throw new Error('Image upload failed: ' + imageError.message);
        }

        const { data: url } = supabase.storage
          .from('supabase')
          .getPublicUrl(`files/${image.name}`);

        setImageUrl(url.publicUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      description: desc,
      image_url: imageUrl,
      link_url: link,
      stacks: selectedStacks,
    };

    updateWorks(payload);
  };

  const handleLogout = () => {
    logout(); // Call the logout function
    // Optionally, redirect the user to the login page
    router.push('/login');
  };

  return (
    <main className="container mx-auto flex h-screen w-screen flex-col justify-between py-10">
      <section>
        <h1 className="mb-10 text-xl">Add Portfolio</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-black"
          />
          <label htmlFor="link">Link</label>
          <input
            id="link"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="text-black"
          />
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="text-black"
          />
          <label htmlFor="image">Image</label>
          <input id="image" type="file" onChange={handleImageChange} />
          <button onClick={handleUploadImage}>Upload</button>
          <div>
            Stacks
            <StackList />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
      <button onClick={handleLogout} className="w-full">
        LOGOUT
      </button>
    </main>
  );
};

export default Admin;
