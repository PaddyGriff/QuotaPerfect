import Image from 'next/image';

export default function Logo() {
  return (
    <div className="relative w-[120px] h-[120px] mx-auto mb-4">
      <Image
        src="/images/logo.png"
        alt="Quota Perfect Logo"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
} 