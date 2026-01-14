import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-primary via-blue-500 to-blue-600 p-8 pb-12 text-center relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-5 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-5 left-10 w-12 h-12 border-2 border-white rounded-full"></div>
          </div>
          <div className="relative">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-2xl text-white mb-2">
              {isLogin ? 'Chào Mừng Trở Lại!' : 'Tạo Tài Khoản'}
            </h2>
            <p className="text-white/90">
              {isLogin ? 'Đăng nhập để tiếp tục' : 'Đăng ký để bắt đầu'}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 -mt-6 bg-card rounded-t-3xl relative">
          <form className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block mb-2 text-sm text-foreground/70">
                  Họ và tên
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            <div>
              <label className="block mb-2 text-sm text-foreground/70">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-foreground/70">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-border" />
                  <span className="text-sm text-muted-foreground">Ghi nhớ đăng nhập</span>
                </label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Quên mật khẩu?
                </a>
              </div>
            )}

            <button 
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              {isLogin ? 'Đăng nhập' : 'Đăng ký'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-sm text-muted-foreground">hoặc</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full py-3 border-2 border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Đăng nhập với Google</span>
            </button>

            <button className="w-full py-3 border-2 border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Đăng nhập với Facebook</span>
            </button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="text-center mt-6">
            <span className="text-muted-foreground">
              {isLogin ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
            </span>
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline"
            >
              {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
