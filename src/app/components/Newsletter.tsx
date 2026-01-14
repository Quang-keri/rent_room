import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-br from-primary via-blue-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl lg:text-3xl text-white mb-4">
              Đăng Ký Nhận Ưu Đãi
            </h2>
            <p className="text-white/90 mb-8">
              Nhận thông tin về các phòng học mới và ưu đãi đặc biệt ngay trong email của bạn
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="flex-1 px-6 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
              />
              <button className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
