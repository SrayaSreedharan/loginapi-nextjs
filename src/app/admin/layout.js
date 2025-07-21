import Header from "../admin/component/Header";
import Footer from "../admin/component/Footer";


export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Header/>
        <main className="p-6">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
