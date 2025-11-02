// src/components/ui/Card.jsx
export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, children, className = "" }) {
  return (
    <div className={`border-b px-5 py-3 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      )}
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h2
      className={`text-xl font-semibold text-gray-800 tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return <div className={`border-t px-5 py-3 ${className}`}>{children}</div>;
}
