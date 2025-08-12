import { Container } from "./Container";
import { Expandable, ExpandableItems } from "./Expandable";
import { SectionHeading } from "./SectionHeading";

const tableOfContents = {
  "First Phase": {
    "Kick-off Meeting": true,
    "Project Management Presentation": true,
    "Team Formation": true,
  },
  "Second Phase": {
    "Progress Presentation 1": true,
    "Preliminary Design Review Presentation": true,
    "Progress Presentation 2": true,
    "Progress Presentation 3": true,
    "Critical Design Review Presentation": true,
    "Project Video Submission": true,
  },
  "Third Phase": {
    "Montrael Trip Planning": true,
    "Flight Campaign": true,
    "Canadian Space Agency HQ Visit": true,
  },
  "Fourth Phase": {
    "Cross Section Samples": false,
    "Write a Report": false,
  },
};

export function TableOfContents() {
  return (
    <section
      id="milestones"
      aria-labelledby="milestones-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="milestones-title">
          Key Milestones
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Milestones from Oct 2023 - Aug 2024.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Here is a list of all the key milestones that we accomplished!
        </p>

        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, milestones]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(milestones).map(([milestone, achieved]) => (
                      <li
                        key={milestone}
                        className="flex justify-between py-3"
                        aria-label={`${milestone} ${
                          achieved ? "completed" : "pending"
                        }`}
                      >
                        <span className="font-medium text-slate-900">
                          {milestone}
                        </span>
                        <span className="font-mono text-slate-400">
                          {achieved ? "DONE ✅" : "IN PROGRESS 🔨"}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>

          {/*<ExpandableButton>See more</ExpandableButton>*/}
        </Expandable>
      </Container>
    </section>
  );
}
