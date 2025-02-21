const ElementWithTooltip = ({element, title, description}) => {
  return (
    <div className="relative group">
      {element}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-max py-1 px-4 text-xs text-light bg-primary rounded-xs opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-xs font-bold">{title}</div>
        {description && <div className="text-xs">{description}</div>}
      </div>
    </div>
  )
}

export default ElementWithTooltip;