import { ChevronLeft, CreditCard, Smartphone, Building2, Wallet, CheckCircle, Shield, Lock, Calendar, User, MapPin, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';
import type { Room } from '@/app/components/FeaturedRooms';
import type { CustomerInfo } from '@/app/components/BookingPage';

interface BookingData {
  date: string;
  startTime: string;
  endTime: string;
  guests: string;
}

interface PaymentPageProps {
  room: Room;
  bookingData: BookingData;
  customerInfo: CustomerInfo;
  onBack: () => void;
  onPaymentComplete: () => void;
}

type PaymentMethod = 'card' | 'momo' | 'banking' | 'wallet';

export function PaymentPage({ room, bookingData, customerInfo, onBack, onPaymentComplete }: PaymentPageProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate price
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

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardData({ ...cardData, cardNumber: value });
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    if (value.length >= 2 && !value.includes('/')) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length <= 5) {
      setCardData({ ...cardData, expiryDate: value });
    }
  };

  const paymentMethods = [
    {
      id: 'card' as PaymentMethod,
      name: 'Thẻ tín dụng/Ghi nợ',
      icon: CreditCard,
      description: 'Visa, Mastercard, JCB'
    },
    {
      id: 'momo' as PaymentMethod,
      name: 'Ví MoMo',
      icon: Smartphone,
      description: 'Thanh toán qua ví điện tử'
    },
    {
      id: 'banking' as PaymentMethod,
      name: 'Chuyển khoản ngân hàng',
      icon: Building2,
      description: 'VietcomBank, Techcombank, VPBank...'
    },
    {
      id: 'wallet' as PaymentMethod,
      name: 'Ví điện tử khác',
      icon: Wallet,
      description: 'ZaloPay, VNPay, ShopeePay'
    }
  ];

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
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-green-600" />
              <span className="text-sm text-muted-foreground hidden sm:inline">Kết nối bảo mật SSL</span>
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
            <span>Quay lại thông tin đặt phòng</span>
          </button>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-sm text-foreground hidden sm:inline">Chi tiết</span>
              </div>
              <div className="flex-1 h-0.5 bg-primary"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">2</div>
                <span className="text-sm text-primary hidden sm:inline">Thanh toán</span>
              </div>
              <div className="flex-1 h-0.5 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">3</div>
                <span className="text-sm text-muted-foreground hidden sm:inline">Hoàn tất</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Payment Methods */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl text-foreground mb-4">Chọn phương thức thanh toán</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedMethod === method.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          selectedMethod === method.id ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          <method.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-foreground mb-1">{method.name}</p>
                          <p className="text-xs text-muted-foreground">{method.description}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedMethod === method.id 
                            ? 'border-primary' 
                            : 'border-border'
                        }`}>
                          {selectedMethod === method.id && (
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Payment Form Based on Selected Method */}
                <form onSubmit={handlePayment}>
                  {selectedMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-2 text-sm text-foreground/70">
                          Số thẻ <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="text"
                            value={formatCardNumber(cardData.cardNumber)}
                            onChange={handleCardNumberChange}
                            placeholder="1234 5678 9012 3456"
                            required
                            className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm text-foreground/70">
                          Tên chủ thẻ <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="text"
                            value={cardData.cardName}
                            onChange={(e) => setCardData({ ...cardData, cardName: e.target.value.toUpperCase() })}
                            placeholder="NGUYEN VAN A"
                            required
                            className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary uppercase"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 text-sm text-foreground/70">
                            Ngày hết hạn <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                              type="text"
                              value={cardData.expiryDate}
                              onChange={handleExpiryChange}
                              placeholder="MM/YY"
                              required
                              className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block mb-2 text-sm text-foreground/70">
                            CVV <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={cardData.cvv}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (value.length <= 3 && /^\d*$/.test(value)) {
                                setCardData({ ...cardData, cvv: value });
                              }
                            }}
                            placeholder="123"
                            required
                            className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedMethod === 'momo' && (
                    <div className="bg-secondary/20 rounded-xl p-6 text-center">
                      <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg text-foreground mb-2">Thanh toán qua MoMo</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Bạn sẽ được chuyển hướng đến ứng dụng MoMo để hoàn tất thanh toán
                      </p>
                      <div className="bg-card rounded-lg p-4 border border-border">
                        <p className="text-xs text-muted-foreground">Số điện thoại MoMo</p>
                        <input
                          type="tel"
                          placeholder="0912345678"
                          required
                          className="w-full px-4 py-2 mt-2 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  )}

                  {selectedMethod === 'banking' && (
                    <div className="bg-secondary/20 rounded-xl p-6">
                      <h3 className="text-lg text-foreground mb-4 text-center">Thông tin chuyển khoản</h3>
                      <div className="space-y-3 bg-card rounded-lg p-4 border border-border">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Ngân hàng:</span>
                          <span className="text-foreground">VietcomBank</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Số tài khoản:</span>
                          <span className="text-foreground font-mono">1234567890</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Chủ tài khoản:</span>
                          <span className="text-foreground">STUDYROOM CO., LTD</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Số tiền:</span>
                          <span className="text-foreground text-primary">{total.toLocaleString('vi-VN')}₫</span>
                        </div>
                        <div className="pt-3 border-t border-border">
                          <span className="text-muted-foreground">Nội dung:</span>
                          <p className="text-foreground font-mono mt-1 bg-muted p-2 rounded">
                            STUDYROOM {customerInfo.phone.slice(-4)}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        Vui lòng chuyển khoản và giữ lại biên lai. Chúng tôi sẽ xác nhận trong vòng 15 phút.
                      </p>
                    </div>
                  )}

                  {selectedMethod === 'wallet' && (
                    <div className="grid grid-cols-3 gap-4">
                      {['ZaloPay', 'VNPay', 'ShopeePay'].map((wallet) => (
                        <button
                          key={wallet}
                          type="button"
                          className="p-4 bg-secondary/20 rounded-xl border-2 border-border hover:border-primary transition-all"
                        >
                          <Wallet className="w-8 h-8 mx-auto mb-2 text-primary" />
                          <p className="text-sm text-center">{wallet}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </form>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground mb-2">Thanh toán an toàn & bảo mật</h3>
                    <p className="text-sm text-muted-foreground">
                      Thông tin thanh toán của bạn được mã hóa bằng SSL 256-bit. 
                      Chúng tôi không lưu trữ thông tin thẻ của bạn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Order Summary */}
                <div className="bg-card rounded-2xl border border-border p-6 shadow-lg">
                  <h2 className="text-xl text-foreground mb-4">Chi tiết thanh toán</h2>

                  {/* Room Info */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex gap-4 mb-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback 
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground mb-1 truncate">{room.name}</h3>
                        <p className="text-sm text-muted-foreground">{room.type}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {bookingData.date ? new Date(bookingData.date).toLocaleDateString('vi-VN') : 'Chưa chọn'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{bookingData.startTime} - {bookingData.endTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{bookingData.guests}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{room.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <h3 className="text-sm text-muted-foreground mb-2">Thông tin người đặt</h3>
                    <p className="text-foreground">{customerInfo.lastName} {customerInfo.firstName}</p>
                    <p className="text-sm text-muted-foreground">{customerInfo.email}</p>
                    <p className="text-sm text-muted-foreground">{customerInfo.phone}</p>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {room.price.toLocaleString('vi-VN')}₫ x {hours} giờ
                      </span>
                      <span className="text-foreground">{subtotal.toLocaleString('vi-VN')}₫</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Phí dịch vụ</span>
                      <span className="text-foreground">{serviceFee.toLocaleString('vi-VN')}₫</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-foreground">Tổng thanh toán</span>
                      <span className="text-2xl text-primary">{total.toLocaleString('vi-VN')}₫</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Đang xử lý...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        <span>Thanh toán ngay</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
