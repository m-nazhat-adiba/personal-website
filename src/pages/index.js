import Layout from "@/components/common/layout";
import Header from "@/components/homepage/Header";
import About from "@/components/homepage/About";
import Works from "@/components/homepage/Works";
import Skills from "@/components/homepage/Skills";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-24 mb-8">
        <Header />
        <div className="container mx-auto flex flex-col gap-24 px-4 xl:px-2 w-full">
          <About />
          <Works />
          <Skills />
        </div>
      </div>
    </Layout>
  );
}
