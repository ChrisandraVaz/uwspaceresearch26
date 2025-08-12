import { Container } from "./components/Container";
import { SectionHeading } from "./components/SectionHeading";
import heating from "./assets/heating.jpg";

export function Screencasts() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          Research
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Our project and the science behind it.
        </p>
        <div className="flex">
          <div className="w-3/4">
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Soldering is a method of joining metal components by melting a
              filler metal, known as solder, and allowing it to flow into the
              joint between the parts. This creates an electrically conductive
              connection. However, soldering in microgravity results in joints
              of inferior quality compared to those made on Earth due to
              increased interior porosity. This porosity occurs because buoyant
              forces on flux and gases, present under Earth&apos;s gravity, are
              absent.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              To address this issue, an experiment will be conducted to solder
              inside a centrifuge in microgravity and compare the results with
              soldering without a centrifuge. Centrifuges have been utilized in
              microgravity environments to simulate gravity for test specimens,
              generating artificial gravity through rotation. This experiment
              aims to subject solder joints to centrifugal forces mimicking
              Earth&apos;s gravity, expecting improved joint quality in terms of
              porosity.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              The experiment is scheduled for July 2024 aboard the modified
              Falcon 20 aircraft. This aircraft provides a typical parabolic
              flight sequence, starting with a 2g-pull as it climbs in altitude,
              followed by a period of microgravity lasting 20-30 seconds. Solder
              typically solidifies within seconds, making parabolic flight ideal
              for this research.
            </p>
          </div>
          <div className="w-1/4">
            <img src={heating} alt="Your Image" width={300} height={200} />
          </div>
        </div>
      </Container>
    </section>
  );
}
