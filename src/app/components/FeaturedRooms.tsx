import { MapPin, Users, Star, Wifi, Coffee, Monitor, Heart } from 'lucide-react';
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

const rooms: Room[] = [
  {
    id: 1,
    name: "Phòng Coworking Sang Trọng",
    location: "Quận 1, TP.HCM",
    price: 50000,
    rating: 4.9,
    reviews: 128,
    capacity: 8,
    image: "https://images.unsplash.com/photo-1559310415-1e164ccd653a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3dvcmtpbmclMjBzcGFjZSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODMwNzYwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    amenities: ["Wifi", "Coffee", "Monitor"],
    type: "Coworking"
  },
  {
    id: 2,
    name: "Phòng Họp Hiện Đại",
    location: "Quận 3, TP.HCM",
    price: 120000,
    rating: 4.8,
    reviews: 96,
    capacity: 12,
    image: "https://images.unsplash.com/photo-1703355685952-03ed19f70f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NjgyMTc4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    amenities: ["Wifi", "Monitor", "Coffee"],
    type: "Meeting Room"
  },
  {
    id: 3,
    name: "Phòng Học Riêng Tư",
    location: "Quận 7, TP.HCM",
    price: 35000,
    rating: 4.7,
    reviews: 84,
    capacity: 4,
    image: "https://images.unsplash.com/photo-1765338914703-03c2312fab8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwc3R1ZHklMjByb29tfGVufDF8fHx8MTc2ODMwODgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    amenities: ["Wifi", "Coffee"],
    type: "Private Study"
  },
  {
    id: 4,
    name: "Phòng Hội Thảo Cao Cấp",
    location: "Quận Bình Thạnh, TP.HCM",
    price: 200000,
    rating: 5.0,
    reviews: 156,
    capacity: 20,
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODIzODkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    amenities: ["Wifi", "Monitor", "Coffee"],
    type: "Conference"
  },
  {
    id: 5,
    name: "Không Gian Đọc Sách",
    location: "Quận 2, TP.HCM",
    price: 25000,
    rating: 4.6,
    reviews: 72,
    capacity: 6,
    image: "https://images.unsplash.com/photo-1637455587265-2a3c2cbbcc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwcmVhZGluZyUyMHNwYWNlfGVufDF8fHx8MTc2ODMwODgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    amenities: ["Wifi", "Coffee"],
    type: "Reading Space"
  },
  {
    id: 6,
    name: "Lớp Học Thông Minh",
    location: "Quận 10, TP.HCM",
    price: 80000,
    rating: 4.9,
    reviews: 112,
    capacity: 15,
    image: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBtb2Rlcm4lMjBlZHVjYXRpb258ZW58MXx8fHwxNzY4MzA4ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    amenities: ["Wifi", "Monitor", "Coffee"],
    type: "Classroom"
  }
];

interface RoomCardProps {
  room: Room;
  onRoomClick: (room: Room) => void;
  onBookNow: (room: Room) => void;
}

function RoomCard({ room, onRoomClick, onBookNow }: RoomCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border">
      <div className="relative overflow-hidden aspect-[4/3] cursor-pointer" onClick={() => onRoomClick(room)}>
        <ImageWithFallback 
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-foreground/60'}`} 
          />
        </button>
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full">
          {room.type}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg text-card-foreground group-hover:text-primary transition-colors cursor-pointer" onClick={() => onRoomClick(room)}>
            {room.name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{room.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{room.location}</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          {room.amenities.includes("Wifi") && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Wifi className="w-4 h-4" />
            </div>
          )}
          {room.amenities.includes("Coffee") && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Coffee className="w-4 h-4" />
            </div>
          )}
          {room.amenities.includes("Monitor") && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Monitor className="w-4 h-4" />
            </div>
          )}
          <div className="flex items-center gap-1 text-muted-foreground ml-auto">
            <Users className="w-4 h-4" />
            <span className="text-sm">{room.capacity} người</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-2xl text-primary">{room.price.toLocaleString('vi-VN')}₫</span>
            <span className="text-sm text-muted-foreground">/giờ</span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onBookNow(room);
            }}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Đặt ngay
          </button>
        </div>
      </div>
    </div>
  );
}

interface FeaturedRoomsProps {
  onRoomClick: (room: Room) => void;
  onBookNow: (room: Room) => void;
}

export function FeaturedRooms({ onRoomClick, onBookNow }: FeaturedRoomsProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Phòng Học Nổi Bật
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Khám phá các phòng học được yêu thích nhất với đầy đủ tiện nghi 
            và không gian học tập lý tưởng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} onRoomClick={onRoomClick} onBookNow={onBookNow} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200">
            Xem tất cả phòng
          </button>
        </div>
      </div>
    </section>
  );
}

export { rooms };
export type { Room };