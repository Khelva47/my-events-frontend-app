export default function PageHeader({ title, description }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}
