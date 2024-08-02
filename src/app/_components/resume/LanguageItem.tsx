type LanguageItemProps = {
  label: string
  level: string
}
export const LanguageItem = ({ label, level }: LanguageItemProps) => {
  return (
    <div>
      <p>
        <span>{label}</span>
        &nbsp;
        <span>({level})</span>
      </p>
    </div>
  )
}
