import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ChatWidget from '@/components/chat/ChatWidget';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Layout;
