import Header from "../user/component/Header";
import Footer from "../user/component/Footer";


export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
     <Header/>
        <main className="p-6">{children}</main>
    <Footer/>
    </div>
  );
}
