import { Clock, Shield, CreditCard, Headphones } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Đặt Phòng Nhanh Chóng",
    description: "Chỉ với vài thao tác đơn giản, bạn có thể đặt phòng học ngay lập tức"
  },
  {
    icon: Shield,
    title: "Bảo Mật & An Toàn",
    description: "Hệ thống bảo mật cao, đảm bảo thông tin cá nhân luôn được bảo vệ"
  },
  {
    icon: CreditCard,
    title: "Thanh Toán Linh Hoạt",
    description: "Hỗ trợ nhiều hình thức thanh toán tiện lợi và an toàn"
  },
  {
    icon: Headphones,
    title: "Hỗ Trợ 24/7",
    description: "Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn mọi lúc"
  }
];

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm thuê phòng học tốt nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
