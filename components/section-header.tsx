import { cn } from "@/lib/utils"
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-4",
      centered ? "text-center" : "text-left",
      className
    )}>
      <SectionTitle className={cn(!centered && "text-left")}>
        {title}
      </SectionTitle>
      {subtitle && (
        <SectionSubtitle className={cn(!centered && "text-left mx-0")}>
          {subtitle}
        </SectionSubtitle>
      )}
    </div>
  )
}
