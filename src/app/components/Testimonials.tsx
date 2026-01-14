import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    role: "Sinh viên",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    comment: "Phòng học rất sạch sẽ, yên tĩnh và đầy đủ tiện nghi. Giá cả hợp lý, dịch vụ tốt. Tôi sẽ tiếp tục sử dụng!"
  },
  {
    id: 2,
    name: "Trần Hoàng Nam",
    role: "Freelancer",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    comment: "Không gian làm việc chuyên nghiệp, internet nhanh. Rất phù hợp cho những người làm việc tự do như tôi."
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    role: "Giáo viên",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    comment: "Đặt phòng nhanh chóng và tiện lợi. Phòng học có đầy đủ thiết bị cần thiết cho buổi dạy của tôi."
  }
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary/30 via-background to-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hàng nghìn khách hàng hài lòng đã sử dụng dịch vụ của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <ImageWithFallback 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
