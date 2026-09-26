import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'

export default function SkillsSection({ section, skills }) {
  return (
    <section className="mb-14 animate-fade-up delay-200 md:mb-16">
      {section.label && <SectionLabel>{section.label}</SectionLabel>}
      <h2 className="mb-10 text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-[40px]">
        {section.title}
      </h2>

      <div className="divide-y divide-border rounded-2xl border border-border bg-bg/80 backdrop-blur-sm">
        {skills.map((group) => (
          <div key={group.title} className="px-5 py-7 first:rounded-t-2xl last:rounded-b-2xl sm:px-7">
            <h3 className="mb-4 text-sm font-medium text-fg">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item} size="lg">
                  {item}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
