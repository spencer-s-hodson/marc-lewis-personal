import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ 
  className, 
  autoGrow = false,
  onChange,
  ...props 
}: React.ComponentProps<"textarea"> & { autoGrow?: boolean }) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const adjustHeight = React.useCallback(() => {
    const textarea = textareaRef.current
    if (textarea && autoGrow) {
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto'
      // Set height to scrollHeight to fit content
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [autoGrow])

  // Adjust height on mount and when value changes
  React.useEffect(() => {
    adjustHeight()
  }, [adjustHeight, props.value, props.defaultValue])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight()
    onChange?.(e)
  }

  return (
    <textarea
      ref={textareaRef}
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        autoGrow && "resize-none overflow-hidden",
        className
      )}
      onChange={handleChange}
      {...props}
    />
  )
}

export { Textarea }
