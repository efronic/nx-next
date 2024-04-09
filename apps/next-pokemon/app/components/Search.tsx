'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}`);
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        placeholder="Search"
        className="bg-white p-2 w-80 text-xl rounded-xl"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
}
