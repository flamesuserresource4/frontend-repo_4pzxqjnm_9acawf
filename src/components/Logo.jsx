export default function Logo({ size = 28 }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-md"
        style={{ width: size, height: size, backgroundColor: '#7CFF00' }}
      />
      <span className="text-white font-semibold text-lg tracking-tight">Chatoria</span>
    </div>
  )
}
