import { Search, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Tìm Kiếm Phòng",
    description: "Tìm kiếm phòng học phù hợp với nhu cầu của bạn theo địa điểm, sức chứa và giá cả"
  },
  {
    icon: Calendar,
    step: "02",
    title: "Đặt Phòng & Thanh Toán",
    description: "Chọn thời gian phù hợp và thanh toán dễ dàng qua nhiều hình thức"
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Xác Nhận & Sử Dụng",
    description: "Nhận xác nhận ngay lập tức và bắt đầu sử dụng phòng học của bạn"
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Cách Thức Hoạt Động
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quy trình đặt phòng đơn giản chỉ với 3 bước
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center border-4 border-background">
                    <span className="text-sm text-accent-foreground">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-accent">
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
