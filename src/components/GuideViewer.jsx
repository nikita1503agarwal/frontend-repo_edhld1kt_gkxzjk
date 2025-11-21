import { useState } from 'react'

export default function GuideViewer() {
  const [query, setQuery] = useState('Black and white robot poster with orange glow')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const run = async () => {
    setLoading(true)
    setError(null)
    setData(null)
    try {
      const res = await fetch(`${backend}/api/guides`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source_name: query })
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const json = await res.json()
      setData(json)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-slate-950 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex flex-col md:flex-row md:items-end gap-3">
            <div className="flex-1">
              <label className="block text-sm text-slate-300 mb-1">Describe or paste a design link</label>
              <input value={query} onChange={(e)=>setQuery(e.target.value)} className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g., Instagram story with neon gradient and bold title" />
            </div>
            <button onClick={run} disabled={loading} className="rounded-lg bg-orange-500 px-5 py-2 text-white font-medium hover:bg-orange-400 transition disabled:opacity-50">
              {loading ? 'Generating…' : 'Generate steps'}
            </button>
          </div>

          {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}

          {data && (
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {Object.entries(data.steps || {}).map(([tool, steps]) => (
                <div key={tool} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <h3 className="font-semibold text-white capitalize">{tool}</h3>
                  <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-slate-300">
                    {steps.map((s, i) => <li key={i}>{s}</li>)}
                  </ol>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
