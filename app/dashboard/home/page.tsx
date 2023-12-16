import Banner from "@/app/ui/home/banner";
import Companies from "@/app/ui/home/companies";
import Footer from "@/app/ui/home/footer";
import FrequentQuestions from "@/app/ui/home/frequent-questions";
import MainSection from "@/app/ui/home/main-section";
import Quote from "@/app/ui/home/quote";

export default function Page() {
  return (
    <main>
      <Banner />
      <Companies />
      <MainSection />
      <Quote />
      <FrequentQuestions />
    </main>
  );
}
