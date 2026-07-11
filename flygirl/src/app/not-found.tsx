import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-warmwhite px-6 text-center">
      <span className="eyebrow">Off the Map</span>
      <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] text-plum">
        This page has taken flight.
      </h1>
      <p className="mt-4 max-w-[42ch] text-plum-soft">
        The page you&apos;re looking for isn&apos;t here — but there&apos;s plenty more
        to explore.
      </p>
      <div className="mt-10">
        <Button href="/" variant="dark">
          Return Home
        </Button>
      </div>
    </section>
  );
}
