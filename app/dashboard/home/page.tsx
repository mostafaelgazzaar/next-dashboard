import Banner from "@/app/ui/home/banner";
import MainSection from "@/app/ui/home/main-section";
import Quote from "@/app/ui/home/quote";

export default function Page() {
  return (
    <main>
      <Banner />
      {/*<Companies />*/}
      <Quote />

      <MainSection />
      {/*<FrequentQuestions />*/}
    </main>
  );
}
