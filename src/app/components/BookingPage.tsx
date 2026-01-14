import { ChevronLeft, MapPin, Users, Calendar, Clock, Mail, Phone, User, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';
import type { Room } from '@/app/components/FeaturedRooms';

interface BookingData {
  date: string;
  startTime: string;
  endTime: string;
  guests: string;
}

interface BookingPageProps {
  room: Room;
  bookingData: BookingData;
  onBack: () => void;
  onConfirm: (customerInfo: CustomerInfo) => void;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export function BookingPage({ room, bookingData, onBack, onConfirm }: BookingPageProps) {
  const [formData, setFormData] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Calculate hours and total price
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Vui lòng đồng ý với điều khoản và điều kiện');
      return;
    }
    onConfirm(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Thanh toán an toàn</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <button 
            onClick={onBack}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quay lại</span>
          </button>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl text-foreground mb-2">Xác nhận và thanh toán</h1>
            <p className="text-muted-foreground">Vui lòng kiểm tra thông tin đặt phòng trước khi thanh toán</p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Booking Details Card */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl text-foreground mb-4">Chi tiết đặt phòng của bạn</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/20 rounded-xl">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Ngày đặt</span>
                    </div>
                    <p className="text-foreground">
                      {bookingData.date ? new Date(bookingData.date).toLocaleDateString('vi-VN', { 
                        weekday: 'short', 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      }) : 'Chưa chọn'}
                    </p>
                  </div>

                  <div className="p-4 bg-secondary/20 rounded-xl">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Thời gian</span>
                    </div>
                    <p className="text-foreground">
                      {bookingData.startTime || '08:00'} - {bookingData.endTime || '10:00'} ({hours} giờ)
                    </p>
                  </div>

                  <div className="p-4 bg-secondary/20 rounded-xl">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Số người</span>
                    </div>
                    <p className="text-foreground">{bookingData.guests || '1-4 người'}</p>
                  </div>

                  <div className="p-4 bg-secondary/20 rounded-xl">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Vị trí</span>
                    </div>
                    <p className="text-foreground">{room.location}</p>
                  </div>
                </div>
              </div>

              {/* Customer Information Form */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl text-foreground mb-4">Thông tin người đặt</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm text-foreground/70">
                        Họ <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Nguyễn Văn"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-foreground/70">
                        Tên <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="A"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-foreground/70">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Xác nhận đặt phòng sẽ được gửi đến email này
                    </p>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-foreground/70">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0912345678"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-foreground/70">
                      Yêu cầu đặc biệt (Tùy chọn)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Ví dụ: Cần thêm ghế ngồi, bàn làm việc thêm..."
                      rows={4}
                      className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                </form>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Chính sách hủy phòng
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Miễn phí hủy</strong> trước 24 giờ để được hoàn tiền đầy đủ</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Hủy trong vòng 24 giờ sẽ bị trừ 50% phí đặt phòng</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Không hoàn tiền khi hủy trong ngày đã đặt</span>
                  </p>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-5 h-5 rounded border-border mt-0.5"
                  />
                  <span className="text-sm text-muted-foreground">
                    Tôi đồng ý với{' '}
                    <a href="#" className="text-primary hover:underline">điều khoản và điều kiện</a>,{' '}
                    <a href="#" className="text-primary hover:underline">chính sách bảo mật</a> và{' '}
                    <a href="#" className="text-primary hover:underline">chính sách hủy phòng</a> của StudyRoom
                  </span>
                </label>
              </div>
            </div>

            {/* Right Column - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-2xl border border-border p-6 shadow-lg">
                <h2 className="text-xl text-foreground mb-4">Tóm tắt đặt phòng</h2>

                {/* Room Info */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback 
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground mb-1 truncate">{room.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3" />
                        {room.location}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Tối đa {room.capacity} người
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {room.price.toLocaleString('vi-VN')}₫ x {hours} giờ
                    </span>
                    <span className="text-foreground">{subtotal.toLocaleString('vi-VN')}��</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phí dịch vụ</span>
                    <span className="text-foreground">{serviceFee.toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-foreground">Tổng cộng</span>
                    <span className="text-2xl text-primary">{total.toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!agreedToTerms}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Xác nhận và thanh toán
                </button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Bạn sẽ không bị tính phí ngay lúc này
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
