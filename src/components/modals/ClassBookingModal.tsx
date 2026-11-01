import React, { useState } from 'react';
import { X, CheckCircle2, Clock, Calendar, MapPin, User, Flame, AlertCircle } from 'lucide-react';
import { ClassSession } from '../../data/gymData';

interface ClassBookingModalProps {
  session: ClassSession | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (sessionId: string) => void;
}

export const ClassBookingModal: React.FC<ClassBookingModalProps> = ({
  session,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !session) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsBooked(true);
    onSuccess(session.id);
  };

  const handleDownloadCalendar = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//VOLT ATHLETICS//Class Schedule//EN
BEGIN:VEVENT
SUMMARY:${session.name} - VOLT ATHLETICS
DESCRIPTION:Trainer: ${session.trainer} | Room: ${session.room}
LOCATION:VOLT ATHLETICS, 840 Power Blvd, District 4
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${session.name.replace(/\s+/g, '_')}_VOLT.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClose = () => {
    setIsBooked(false);
    setName('');
    setEmail('');
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-md bg-[#131614] border border-[#232723] rounded-2xl p-6 text-[#F5F5F0] shadow-2xl">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#A5AAA3] hover:text-[#F5F5F0] hover:bg-[#232723]"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C6FF3D]/20 border border-[#C6FF3D] flex items-center justify-center text-[#C6FF3D]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C6FF3D] font-bold">Spot Reserved</span>
              <h3 className="text-xl font-bold font-display uppercase mt-1">{session.name}</h3>
              <p className="text-xs text-[#A5AAA3] mt-1">
                You are booked for {session.day} at {session.time} with {session.trainer}.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D0C] border border-[#232723] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#A5AAA3]">Athlete</span>
                <span className="text-white font-medium">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A5AAA3]">Location</span>
                <span className="text-white font-medium">{session.room}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A5AAA3]">Duration</span>
                <span className="text-white font-medium">{session.duration}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={handleDownloadCalendar}
                className="flex-1 py-2.5 px-3 bg-[#232723] hover:bg-[#2B302B] text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Add to Calendar (.ics)
              </button>
              <button
                onClick={handleClose}
                className="flex-1 py-2.5 px-3 bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-colors"
              >
                Done
              </button>
            </div>
            <p className="text-[10px] text-[#A5AAA3]/70">Demo booking simulation. No real card charged.</p>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2 text-xs text-[#C6FF3D] font-semibold uppercase tracking-wider">
                <span>{session.category}</span>
                <span>·</span>
                <span>{session.day} {session.time}</span>
              </div>
              <h3 className="text-xl font-bold font-display uppercase mt-1">{session.name}</h3>
            </div>

            {/* Session Info Chips */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-5">
              <div className="p-2.5 rounded-lg bg-[#0B0D0C] border border-[#232723] flex items-center gap-2">
                <User className="w-4 h-4 text-[#C6FF3D]" />
                <div>
                  <span className="text-[10px] text-[#A5AAA3] block">Coach</span>
                  <span className="font-medium text-white">{session.trainer}</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0B0D0C] border border-[#232723] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C6FF3D]" />
                <div>
                  <span className="text-[10px] text-[#A5AAA3] block">Location</span>
                  <span className="font-medium text-white">{session.room}</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0B0D0C] border border-[#232723] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C6FF3D]" />
                <div>
                  <span className="text-[10px] text-[#A5AAA3] block">Duration</span>
                  <span className="font-medium text-white">{session.duration}</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0B0D0C] border border-[#232723] flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#C6FF3D]" />
                <div>
                  <span className="text-[10px] text-[#A5AAA3] block">Intensity</span>
                  <span className="font-medium text-white">{session.intensity}</span>
                </div>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between p-2.5 rounded-lg bg-[#C6FF3D]/5 border border-[#C6FF3D]/20 text-xs">
              <span className="text-white">Spots remaining for this session:</span>
              <span className="font-mono font-bold text-[#C6FF3D]">{session.spotsLeft} of {session.spotsTotal}</span>
            </div>

            <form onSubmit={handleBooking} className="space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white focus:outline-none focus:border-[#C6FF3D]"
                />
                {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1">Email for Pass</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="athlete@example.com"
                  className="w-full px-3 py-2 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white focus:outline-none focus:border-[#C6FF3D]"
                />
                {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-bold font-display uppercase tracking-wider rounded-xl text-sm transition-all shadow-md shadow-[#C6FF3D]/10"
              >
                Confirm Spot Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
