import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'

export default function SkillsSection({ section, skills }) {
  return (
    <section className="mb-14 md:mb-16">
      <SectionLabel>{section.label}</SectionLabel>
      <h2 className="mb-10 font-serif text-3xl font-medium text-black sm:text-4xl lg:text-[44px]">
        {section.title}
      </h2>

      <div className="divide-y divide-border">
        {skills.map((group) => (
          <div key={group.title} className="py-8 first:pt-0 last:pb-0">
            <h3 className="mb-5 text-base font-semibold text-black">
              {group.title}:
            </h3>
            <div className="flex flex-wrap gap-3">
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
