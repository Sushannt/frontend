import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-slate-400/25">
      <Header />
      <main className="min-h-[90vh] mt-[10vh]">
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default App;
