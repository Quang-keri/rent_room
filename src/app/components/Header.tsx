import { Menu, User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-semibold text-lg lg:text-xl">StudyRoom</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Trang chủ</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Phòng học</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Về chúng tôi</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Liên hệ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={onLoginClick}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Đăng nhập</span>
            </button>
            <button 
              onClick={onLoginClick}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Đăng ký
            </button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}