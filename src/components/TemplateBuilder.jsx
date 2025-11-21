import { useState } from 'react'

export default function TemplateBuilder({ onGenerateGuide }) {
  const [name, setName] = useState('Tech robot promo')
  const [desc, setDesc] = useState('Modern poster with bold headline, subtle gradient, orange accent')

  const submit = (e) => {
    e.preventDefault()
    onGenerateGuide({ name, desc })
  }

  return (
    <section className="relative bg-slate-950 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Create a template</h2>
          <p className="mt-1 text-slate-400 text-sm">Describe what you want. You can edit everything later.</p>

          <form onSubmit={submit} className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="block text-sm text-slate-300 mb-1">Template name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Description</label>
              <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} rows={3} className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="rounded-lg bg-orange-500 px-5 py-2 text-white font-medium hover:bg-orange-400 transition">Generate guide</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
