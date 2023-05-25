import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  )
}