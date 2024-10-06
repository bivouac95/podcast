export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-full px-4 py-32 pt-[186px] items-center">
      <main className="flex w-full max-w-2xl gap-16">
        {children}
      </main>
    </main>
  );
}
