import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1762732526878-3dd89d99c904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkeSUyMHJvb20lMjBsaWJyYXJ5fGVufDF8fHx8MTc2ODI4NTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Study Room Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-blue-600/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
            Tìm Phòng Học Lý Tưởng<br />Cho Bạn
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Đặt phòng học dễ dàng, nhanh chóng với không gian hiện đại, 
            yên tĩnh và đầy đủ tiện nghi
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 lg:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block mb-2 text-left text-sm text-foreground/70">
                  Địa điểm
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Chọn khu vực..."
                    className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block mb-2 text-left text-sm text-foreground/70">
                  Ngày đến
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block mb-2 text-left text-sm text-foreground/70">
                  Số người
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                    <option>1 người</option>
                    <option>2-4 người</option>
                    <option>5-10 người</option>
                    <option>10+ người</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  <Search className="w-5 h-5" />
                  <span>Tìm kiếm</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
