import { PROFILE } from "../content/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 pb-20 pt-28">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-soft)] text-lg font-semibold text-[var(--accent)]">
        {PROFILE.initials}
      </div>
      <div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I'm {PROFILE.name.split(" ")[0]}
        </h1>
        <p className="mt-3 max-w-xl text-lg text-[var(--text-soft)]">{PROFILE.tagline}</p>
      </div>
    </section>
  );
}
