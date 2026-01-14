import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { FeaturedRooms } from '@/app/components/FeaturedRooms';
import { Features } from '@/app/components/Features';
import { HowItWorks } from '@/app/components/HowItWorks';
import { Testimonials } from '@/app/components/Testimonials';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';
import { LoginModal } from '@/app/components/LoginModal';
import { RoomDetail } from '@/app/components/RoomDetail';
import { BookingPage } from '@/app/components/BookingPage';
import { PaymentPage } from '@/app/components/PaymentPage';
import { SuccessPage } from '@/app/components/SuccessPage';
import type { Room } from '@/app/components/FeaturedRooms';
import type { CustomerInfo } from '@/app/components/BookingPage';

type Page = 'home' | 'roomDetail' | 'booking' | 'payment' | 'success';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [bookingData, setBookingData] = useState({
    date: '',
    startTime: '08:00',
    endTime: '10:00',
    guests: '1-4 người'
  });
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  const handleRoomClick = (room: Room) => {
    setSelectedRoom(room);
    setCurrentPage('roomDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookNow = (room: Room) => {
    setSelectedRoom(room);
    setBookingData({
      date: new Date().toISOString().split('T')[0],
      startTime: '08:00',
      endTime: '10:00',
      guests: '1-4 người'
    });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookNowFromDetail = (data: { date: string; startTime: string; endTime: string; guests: string }) => {
    setBookingData(data);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirmBooking = (info: CustomerInfo) => {
    setCustomerInfo(info);
    setCurrentPage('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentComplete = () => {
    setCurrentPage('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedRoom(null);
    setBookingData({
      date: '',
      startTime: '08:00',
      endTime: '10:00',
      guests: '1-4 người'
    });
    setCustomerInfo(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromRoomDetail = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromBooking = () => {
    setCurrentPage('roomDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromPayment = () => {
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render pages based on current state
  if (currentPage === 'success' && selectedRoom && customerInfo) {
    return (
      <SuccessPage
        room={selectedRoom}
        bookingData={bookingData}
        customerInfo={customerInfo}
        onBackToHome={handleBackToHome}
      />
    );
  }

  if (currentPage === 'payment' && selectedRoom && customerInfo) {
    return (
      <PaymentPage
        room={selectedRoom}
        bookingData={bookingData}
        customerInfo={customerInfo}
        onBack={handleBackFromPayment}
        onPaymentComplete={handlePaymentComplete}
      />
    );
  }

  if (currentPage === 'booking' && selectedRoom) {
    return (
      <BookingPage
        room={selectedRoom}
        bookingData={bookingData}
        onBack={handleBackFromBooking}
        onConfirm={handleConfirmBooking}
      />
    );
  }

  if (currentPage === 'roomDetail' && selectedRoom) {
    return (
      <RoomDetail
        room={selectedRoom}
        onBack={handleBackFromRoomDetail}
        onBookNow={handleBookNowFromDetail}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      <main>
        <Hero />
        <FeaturedRooms onRoomClick={handleRoomClick} onBookNow={handleBookNow} />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}