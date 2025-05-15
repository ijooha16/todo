import AddInput from "@/components/add-input";
import ListContainer from "@/components/list-container";
import QueryProvider from "@/lib/query-provider";

export default function Home() {
  return (
    <QueryProvider>
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="text-3xl font-bold">TODO LIST</div>
        <AddInput />
        <ListContainer />
      </div>
    </QueryProvider>
  );
}
