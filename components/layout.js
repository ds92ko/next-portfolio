import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <main>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">{children}</div>
      </main>
      <Footer />
    </div>
  )
}