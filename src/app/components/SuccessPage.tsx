import { CheckCircle, Calendar, Clock, MapPin, Users, Download, Share2, Home } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import type { Room } from '@/app/components/FeaturedRooms';
import type { CustomerInfo } from '@/app/components/BookingPage';

interface BookingData {
  date: string;
  startTime: string;
  endTime: string;
  guests: string;
}

interface SuccessPageProps {
  room: Room;
  bookingData: BookingData;
  customerInfo: CustomerInfo;
  onBackToHome: () => void;
}

export function SuccessPage({ room, bookingData, customerInfo, onBackToHome }: SuccessPageProps) {
  const bookingId = `SR${Date.now().toString().slice(-8)}`;

  const calculateHours = () => {
    if (!bookingData.startTime || !bookingData.endTime) return 2;
    const start = parseInt(bookingData.startTime.split(':')[0]);
    const end = parseInt(bookingData.endTime.split(':')[0]);
    return end - start;
  };

  const hours = calculateHours();
  const subtotal = room.price * hours;
  const serviceFee = 15000;
  const total = subtotal + serviceFee;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Success Animation */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl text-foreground mb-2">Đặt phòng thành công!</h1>
            <p className="text-muted-foreground">
              Cảm ơn bạn đã đặt phòng tại StudyRoom. Chúng tôi đã gửi email xác nhận đến{' '}
              <span className="text-primary">{customerInfo.email}</span>
            </p>
          </div>

          {/* Booking Confirmation Card */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden mb-6">
            {/* Booking ID Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">Mã đặt phòng</p>
                  <p className="text-2xl font-mono">{bookingId}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-sm mb-1">Tổng thanh toán</p>
                  <p className="text-2xl">{total.toLocaleString('vi-VN')}₫</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Room Details */}
              <div className="mb-6 pb-6 border-b border-border">
                <h2 className="text-xl text-foreground mb-4">Thông tin phòng</h2>
                <div className="flex gap-4">
                  <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback 
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-foreground mb-2">{room.name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{room.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">Sức chứa: {room.capacity} người</span>
                      </div>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {room.type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div className="mb-6 pb-6 border-b border-border">
                <h2 className="text-xl text-foreground mb-4">Chi tiết đặt phòng</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-xl">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ngày đặt</p>
                      <p className="text-foreground">
                        {bookingData.date ? new Date(bookingData.date).toLocaleDateString('vi-VN', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        }) : 'Chưa chọn'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-xl">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Thời gian</p>
                      <p className="text-foreground">{bookingData.startTime} - {bookingData.endTime}</p>
                      <p className="text-sm text-muted-foreground">({hours} giờ)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-xl">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Số người</p>
                      <p className="text-foreground">{bookingData.guests}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-secondary/20 rounded-xl">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Địa điểm</p>
                      <p className="text-foreground">{room.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="mb-6 pb-6 border-b border-border">
                <h2 className="text-xl text-foreground mb-4">Thông tin khách hàng</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Họ và tên</p>
                    <p className="text-foreground">{customerInfo.lastName} {customerInfo.firstName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground">{customerInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Số điện thoại</p>
                    <p className="text-foreground">{customerInfo.phone}</p>
                  </div>
                  {customerInfo.specialRequests && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">Yêu cầu đặc biệt</p>
                      <p className="text-foreground">{customerInfo.specialRequests}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Price Breakdown */}
              <div>
                <h2 className="text-xl text-foreground mb-4">Chi tiết thanh toán</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {room.price.toLocaleString('vi-VN')}₫ x {hours} giờ
                    </span>
                    <span className="text-foreground">{subtotal.toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phí dịch vụ</span>
                    <span className="text-foreground">{serviceFee.toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between items-center">
                    <span className="text-lg text-foreground">Tổng cộng</span>
                    <span className="text-2xl text-primary">{total.toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-card border-2 border-border rounded-lg hover:bg-muted transition-colors">
              <Download className="w-5 h-5" />
              <span>Tải xuống PDF</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-card border-2 border-border rounded-lg hover:bg-muted transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Chia sẻ</span>
            </button>
            <button 
              onClick={onBackToHome}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Về trang chủ</span>
            </button>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg text-foreground mb-3">Lưu ý quan trọng</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Vui lòng mang theo mã đặt phòng <strong className="text-foreground">{bookingId}</strong> khi đến</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Đến trước giờ đặt 10 phút để làm thủ tục check-in</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Miễn phí hủy trước 24 giờ để được hoàn tiền đầy đủ</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Liên hệ hotline: 1900-xxxx nếu cần hỗ trợ</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
