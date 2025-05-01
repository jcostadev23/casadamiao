import MarkDown from "./markdown/page.mdx";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_2fr_10px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2  sm:items-start">
        <MarkDown />
      </main>
    </div>
  );
}
