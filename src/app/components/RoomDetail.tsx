import { ChevronLeft, Star, Heart, Share2, MapPin, Users, Wifi, Coffee, Monitor, Tv, AirVent, Clock, CheckCircle, Calendar, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

interface Room {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  capacity: number;
  image: string;
  amenities: string[];
  type: string;
}

interface RoomDetailProps {
  room: Room;
  onBack: () => void;
  onBookNow: (bookingData: { date: string; startTime: string; endTime: string; guests: string }) => void;
}

export function RoomDetail({ room, onBack, onBookNow }: RoomDetailProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [bookingData, setBookingData] = useState({
    date: '',
    startTime: '08:00',
    endTime: '10:00',
    guests: '1-4 người'
  });

  const handleBooking = () => {
    if (!bookingData.date) {
      alert('Vui lòng chọn ngày đặt phòng');
      return;
    }
    onBookNow(bookingData);
  };

  const images = [
    "https://images.unsplash.com/photo-1742970936099-b68c962278c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwZXF1aXBtZW50JTIwbW9kZXJufGVufDF8fHx8MTc2ODM3Mzk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1667912100232-a457b313ec18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFiJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MzczOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1646223850723-baadaa8a1946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBkZXNrJTIwY2hhaXJzfGVufDF8fHx8MTc2ODM3Mzk5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4MzE0ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const amenitiesList = [
    { icon: Wifi, name: "Digital Wi-Fi" },
    { icon: Monitor, name: "4K Projector" },
    { icon: Tv, name: "Smart Whiteboard" },
    { icon: Coffee, name: "Printing & Scanning" },
    { icon: AirVent, name: "Central Air Conditioning" },
    { icon: Clock, name: "Lab Room Tools" }
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <button onClick={onBack} className="flex items-center gap-1 hover:text-primary transition-colors">
              <ChevronLeft className="w-4 h-4" />
              <span>Trang chủ</span>
            </button>
            <span>/</span>
            <span>Danh sách phòng học</span>
            <span>/</span>
            <span className="text-foreground">{room.name}</span>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <ImageWithFallback 
                src={images[selectedImage]}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${
                    selectedImage === index ? 'ring-4 ring-primary' : ''
                  }`}
                >
                  <ImageWithFallback 
                    src={img}
                    alt={`${room.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Rating */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl lg:text-4xl text-foreground mb-2">{room.name}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{room.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Tối đa {room.capacity} người</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-4 bg-secondary/30 rounded-2xl border border-border">
                  <div className="text-center">
                    <div className="text-3xl text-foreground mb-1">{room.rating}</div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(room.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground">{room.reviews} đánh giá</div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    {[
                      { stars: 5, count: 85 },
                      { stars: 4, count: 30 },
                      { stars: 3, count: 10 },
                      { stars: 2, count: 3 },
                      { stars: 1, count: 0 }
                    ].map((item) => (
                      <div key={item.stars} className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-4">{item.stars}</span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${(item.count / room.reviews) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground w-8">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* About the Space */}
              <div>
                <h2 className="text-2xl text-foreground mb-4">Giới Thiệu Về Phòng</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Phòng {room.name} là không gian học tập lý tưởng với thiết kế hiện đại và đầy đủ tiện nghi. 
                  Được trang bị các thiết bị công nghệ tiên tiến, phòng học phù hợp cho nhiều mục đích từ học tập cá nhân, 
                  làm việc nhóm đến tổ chức các buổi workshop và training.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Không gian rộng rãi, thoáng mát với hệ thống điều hòa hiện đại, ánh sáng tự nhiên và thiết kế âm học 
                  chống ồn giúp tạo môi trường học tập tập trung tối đa. Vị trí thuận lợi với đầy đủ dịch vụ xung quanh.
                </p>
              </div>

              {/* Equipment & Amenities */}
              <div>
                <h2 className="text-2xl text-foreground mb-4">Trang Thiết Bị & Tiện Ích</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenitiesList.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-card-foreground">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-2xl text-foreground mb-4">Vị Trí</h2>
                <div className="bg-muted rounded-2xl p-4 h-64 flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>{room.location}</p>
                    <p className="text-sm mt-1">Bản đồ Google Maps</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-secondary/30 rounded-xl border border-border">
                  <p className="text-sm text-card-foreground">
                    <strong>Science Hall 42, Ground floor</strong><br />
                    Tòa nhà dễ dàng tiếp cận với nhiều phương tiện giao thông công cộng. 
                    Có bãi đỗ xe miễn phí cho khách hàng.
                  </p>
                  <button className="mt-3 text-primary hover:underline text-sm">Xem đường đi →</button>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-2xl shadow-xl border border-border p-6">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl text-primary">{room.price.toLocaleString('vi-VN')}₫</span>
                  <span className="text-muted-foreground">/giờ</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block mb-2 text-sm text-foreground/70">Chọn ngày</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block mb-2 text-sm text-foreground/70">Giờ bắt đầu</label>
                      <select 
                        value={bookingData.startTime}
                        onChange={(e) => setBookingData({ ...bookingData, startTime: e.target.value })}
                        className="w-full px-3 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option>08:00</option>
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                        <option>17:00</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-foreground/70">Giờ kết thúc</label>
                      <select 
                        value={bookingData.endTime}
                        onChange={(e) => setBookingData({ ...bookingData, endTime: e.target.value })}
                        className="w-full px-3 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                        <option>17:00</option>
                        <option>18:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-foreground/70">Số người</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select 
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                      >
                        <option>1 người</option>
                        <option>2-4 người</option>
                        <option>5-10 người</option>
                        <option>10+ người</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6 p-4 bg-secondary/20 rounded-xl">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Giá thuê (2 giờ)</span>
                    <span className="text-foreground">{(room.price * 2).toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phí dịch vụ</span>
                    <span className="text-foreground">15,000₫</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="text-foreground">Tổng cộng</span>
                    <span className="text-xl text-primary">{(room.price * 2 + 15000).toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>

                <button 
                  onClick={handleBooking}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl mb-3"
                >
                  Đặt phòng ngay
                </button>

                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="w-full py-3 border-2 border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2"
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                  <span>{isFavorite ? 'Đã lưu' : 'Lưu phòng'}</span>
                </button>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground mb-1">
                        <strong>Miễn phí hủy trong 24h</strong>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Hủy miễn phí trước 24h để được hoàn tiền đầy đủ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}