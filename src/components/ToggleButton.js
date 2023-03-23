export default function ToggleButton({ className, toggle, children }) {
  return (
    <button className={className} onClick={toggle}>
      {children}
    </button>
  )
}
