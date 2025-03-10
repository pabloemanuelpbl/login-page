function WorkSpace() {
  return (
    <div className="flex min-w-full bg-zinc-400">
        <aside className="min-h-screen w-48 bg-zinc-900 border-r-2">aside</aside>
        <div className="bg-zinc-50 w-screen">
            <header className="h-20 bg-zinc-500">header</header>
            <main>main</main>
        </div>
    </div>
  )
}

export default WorkSpace