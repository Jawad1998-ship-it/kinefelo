export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a0b2e] via-[#3a1c5d] to-[#5d2b7a] z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-400"></div>
    </div>
  );
}
